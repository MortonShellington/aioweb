const { Jimp } = require('jimp');

async function processLogo() {
  try {
    const image = await Jimp.read('public/logo.jpg');
    
    // Target color: #0A1428 -> RGB: 10, 20, 40
    const targetR = 10;
    const targetG = 20;
    const targetB = 40;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];

      // If it's a dark background pixel (not gold)
      if (r < 60 && g < 60 && b < 80) {
        // very dark
        if (r < 30 && g < 30 && b < 40) {
          this.bitmap.data[idx + 0] = targetR;
          this.bitmap.data[idx + 1] = targetG;
          this.bitmap.data[idx + 2] = targetB;
        } else {
          // blend
          this.bitmap.data[idx + 0] = Math.min(255, Math.max(0, targetR + (r * 0.3)));
          this.bitmap.data[idx + 1] = Math.min(255, Math.max(0, targetG + (g * 0.3)));
          this.bitmap.data[idx + 2] = Math.min(255, Math.max(0, targetB + (b * 0.3)));
        }
      }
    });

    await image.write('public/logo-matched.jpg');
    console.log('Done processing logo.');
  } catch (err) {
    console.error(err);
  }
}

processLogo();
