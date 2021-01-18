const canvasToFile = (canvas, quality) => new Promise(resolve => canvas.toBlob(blob => resolve(blob), 'image/jpeg', quality));


export async function compress (canvas, minSize, maxSize) {
  const maxQualitySize = { quality: 100, size: Number.MAX_SAFE_INTEGER };
  const minQualitySize = { quality: 0, size: 0 };
  let quality = 100;
  let count = 0; // 压缩次数
  let compressBlob = null;

  // 二分法
  while (minQualitySize.quality < maxQualitySize.quality) {
      compressBlob = await canvasToFile(canvas, quality / 100);
      const compressSize = compressBlob.size / 1024;
      count++;

      if (compressSize >= minSize && compressSize <= maxSize) {
          console.log(`压缩完成，总共压缩了${count}次`);
          break;
      } else if (compressSize > maxSize) {
          maxQualitySize.quality = quality;
          maxQualitySize.size = compressSize;
      } else {
          minQualitySize.quality = quality;
          minQualitySize.size = compressSize;
      }
      console.log(`第${count}次压缩,压缩后大小${compressSize},quality参数:${quality}`);
  
      quality = Math.ceil((maxQualitySize.quality + minQualitySize.quality) / 2);
  }
  
  return compressBlob;
}

export function dataurlToCanvas(dataurl, canvasId) {
     return new Promise((resolve,reject) => {
          const canvas = document.getElementById(canvasId);
          console.log('canvas', canvas);
          const image = new Image();
          image.onload = function(){
              const  {width: imgW, height: imgH} = image;
              canvas.width = imgW;
              canvas.height = imgH;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(image,0,0,imgW,imgH);
              resolve(canvas);
          }
        image.src = dataurl;

     })
}

export function getUuid (len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
};