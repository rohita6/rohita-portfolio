// class SoundEngine {
//   constructor() {
//     this.ctx = null;
//     this.ambientGain = null;
//     this.filter = null;
//     this.lfo = null;
//     this.lfoGain = null;
//     this.oscillators = [];
//     this.isAmbientPlaying = false;
//     this.isMuted = true; // Default to muted
//   }

//   init() {
//     if (!this.ctx) {
//       const AudioCtx = window.AudioContext || window.webkitAudioContext;
//       if (AudioCtx) {
//         this.ctx = new AudioCtx();
//       }
//     }
//     if (this.ctx && this.ctx.state === 'suspended') {
//       this.ctx.resume();
//     }
//   }

//   // Global Mute Toggle
//   setMuted(muted) {
//     this.init();
//     this.isMuted = muted;
//     this.toggleAmbientSoundscape(!muted);
//   }

//   // Tactile Theme Toggle Click
//   playThemeToggle(nextTheme) {
//     if (this.isMuted) return;
//     this.init();
//     if (!this.ctx) return;

//     const now = this.ctx.currentTime;
//     const osc = this.ctx.createOscillator();
//     const gain = this.ctx.createGain();

//     osc.connect(gain);
//     gain.connect(this.ctx.destination);

//     if (nextTheme === 'light') {
//       osc.type = 'sine';
//       osc.frequency.setValueAtTime(320, now);
//       osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);

//       gain.gain.setValueAtTime(0.12, now);
//       gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

//       osc.start(now);
//       osc.stop(now + 0.08);
//     } else {
//       osc.type = 'triangle';
//       osc.frequency.setValueAtTime(450, now);
//       osc.frequency.exponentialRampToValueAtTime(140, now + 0.06);

//       gain.gain.setValueAtTime(0.18, now);
//       gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

//       osc.start(now);
//       osc.stop(now + 0.06);
//     }
//   }

//   // Ethereal Celestial Breeze Soundscape
//   toggleAmbientSoundscape(enable) {
//     this.init();
//     if (!this.ctx) return;

//     if (enable) {
//       if (this.isAmbientPlaying) return;

//       const now = this.ctx.currentTime;

//       // Master Ambient Gain (Ultra-soft 1% volume ceiling)
//       this.ambientGain = this.ctx.createGain();
//       this.ambientGain.gain.setValueAtTime(0.0001, now);
//       this.ambientGain.gain.exponentialRampToValueAtTime(0.012, now + 2.5);

//       // Low-pass filter for smooth, non-harsh tone
//       this.filter = this.ctx.createBiquadFilter();
//       this.filter.type = 'lowpass';
//       this.filter.frequency.setValueAtTime(420, now);

//       // Low-Frequency Oscillator (LFO) for breathing shimmer effect
//       this.lfo = this.ctx.createOscillator();
//       this.lfo.type = 'sine';
//       this.lfo.frequency.setValueAtTime(0.15, now);

//       this.lfoGain = this.ctx.createGain();
//       this.lfoGain.gain.setValueAtTime(120, now);

//       this.lfo.connect(this.lfoGain);
//       this.lfoGain.connect(this.filter.frequency);

//       this.filter.connect(this.ambientGain);
//       this.ambientGain.connect(this.ctx.destination);

//       // High glassmorphic sine notes (Celestial A3, E4, A4 triad)
//       const frequencies = [220.0, 329.63, 440.0];

//       this.oscillators = frequencies.map((freq) => {
//         const osc = this.ctx.createOscillator();
//         osc.type = 'sine';
//         osc.frequency.setValueAtTime(freq, now);
//         osc.connect(this.filter);
//         osc.start(now);
//         return osc;
//       });

//       this.lfo.start(now);
//       this.isAmbientPlaying = true;
//     } else {
//       if (!this.isAmbientPlaying || !this.ambientGain) return;

//       const now = this.ctx.currentTime;
//       this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

//       setTimeout(() => {
//         this.oscillators.forEach((osc) => {
//           try { osc.stop(); } catch (e) {}
//         });
//         if (this.lfo) {
//           try { this.lfo.stop(); } catch (e) {}
//         }
//         this.oscillators = [];
//         this.lfo = null;
//         this.isAmbientPlaying = false;
//       }, 1200);
//     }
//   }
// }

// export const soundFx = new SoundEngine();

// src/utils/soundEffects.js

class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Tactile Theme Toggle Click
  playThemeToggle(nextTheme) {
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    if (nextTheme === 'light') {
      // Warm, bright ascending pop (Sun Mode)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.start(now);
      osc.stop(now + 0.08);
    } else {
      // Deep, damped mechanical click (Moon Mode)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.06);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.start(now);
      osc.stop(now + 0.06);
    }
  }
}

export const soundFx = new SoundEngine();