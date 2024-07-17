import { getFileName } from '../utils/misc';

// import lmmSrc from '../assets/abc.mp3';
// import gkSrc from '../assets/abc.mp3';
// import wyaSrc from '../assets/abc.mp3';
// import kzkkdSrc from '../assets/abc.mp3';
import rngwndrngSrc from '../assets/Yêu Nhầm Người 2 Linh Hee - HLX MuSic TV.mp3';

import { AudioInfo } from '../types';

export const FREQUENCY = 255; // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData

export const FFT_SIZE = 256; // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize

export const ACCEPT_AUDIO_FORMATS = [
  'audio/flac',
  'audio/mpeg',
  'audio/wav',
].join();

export const PRESET_AUDIOS: AudioInfo[] = [
  // {
  //   name: getFileName(lmmSrc),
  //   src: lmmSrc,
  // },
  // {
  //   name: getFileName(gkSrc),
  //   src: gkSrc,
  // },
  // {
  //   name: getFileName(wyaSrc),
  //   src: wyaSrc,
  // },
  // {
  //   name: getFileName(kzkkdSrc),
  //   src: kzkkdSrc,
  // },
  {
    name: getFileName(rngwndrngSrc),
    src: rngwndrngSrc,
  },
];
