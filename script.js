window.addEventListener('load', () => {
  const cnvs = document.getElementById('cnvs');
  const height = window.innerHeight;
  const width = window.innerWidth;
  cnvs.height = height;
  cnvs.width = width;
  const ctx = cnvs.getContext('2d');
  const boxHeight = 120;
  const boxWidth = 160;
  const clear = () => {
    ctx.beginPath();
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    ctx.beginPath();
  };
  const drawRect = (x, y, w, h) => {
    ctx.strokeStyle= 'rgb(00,00,255)';
    ctx.fillStyle = 'rgb(00,00,255)';
    ctx.fillRect(x, y, w, h);
  };
  const getCenter = () => {
    const centerY = parseInt(cnvs.height / 2, 10);
    const centerX = parseInt(cnvs.width / 2, 10);
    return [centerY, centerX]
  };
  const getStart = (size) => {
    const center = getCenter();
    const startY = center[0] - (parseInt(size[1] / 2, 10));
    const startX = center[1] - (parseInt(size[0] / 2, 10));
    return [startY, startX];
  };
  const getSize = () => {
    let result = null;
    const w  = parseInt(window.innerWidth / 4, 10);
    const h = parseInt(window.innerHeight / 3, 10);
    const wh = parseInt(w - h, 10) / 100;
    if (w > h) {
      const size = parseInt(window.innerWidth - (w * wh), 10);
      result = [size, window.innerHeight, 'w', wh];
    } else {
      const size = parseInt(window.innerHeight + (h * wh), 10);
      result = [window.innerWidth, size, 'h', wh];
    }
    console.log(result);
    return result;
  };
  clear();
  const initSize = getSize();
  const initPoints = getStart(initSize);
  drawRect(initPoints[1], initPoints[0], initSize[0], initSize[1]);
  window.addEventListener('resize', (ev) => {
    cnvs.height = ev.currentTarget.innerHeight;
    cnvs.width = ev.currentTarget.innerWidth;
    clear();
    const size = getSize();
    const points = getStart(size);
    drawRect(points[1], points[0], size[0], size[1]);
  });
});