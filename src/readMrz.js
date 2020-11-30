'use strict';

// const { join } = require('path');

const mrzOcr = require('./internal/mrzOcr');
// const symbols = require('./internal/symbols'); // SYMBOLS MRZ NUMBERS
const roiOptions = require('./roiOptions');

// const fingerprintOptions = {
//   baseDir: join(__dirname, '../fontData'),
//   height: 12,
//   width: 12,
//   minSimilarity: 0.5,
//   fontName: 'ocrb',
//   category: symbols.label,
//   ambiguity: true
// };

// const { loadFontData } = require('ocr-tools');
/* eslint-disable no-unused-vars */
// var fontFingerprint = loadFontData(fingerprintOptions);
/* eslint-enable no-unused-vars */

async function readMrz(image, options = {}) {
  var { ocrResult, mask, rois } = await mrzOcr(image, roiOptions);

  if (options.saveName) {
    mask.save(options.saveName);
  }

  return { rois, mrz: ocrResult };
}

module.exports = readMrz;
