let capture;
let graphics;

function setup() {
  // 建立全螢幕畫布，背景顏色為 d5bdaf
  createCanvas(windowWidth, windowHeight);
  background('#d5bdaf');

  // 初始化攝影機
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 隱藏原始攝影機畫面

  // 使用 createGraphics 產生與攝影機影像相同大小的畫布
  graphics = createGraphics(capture.width, capture.height);
}

function draw() {
  // 將攝影機影像左右顛倒後顯示在視窗的中間
  translate(width,2,height,2); // 將畫布的原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2, capture.width, capture.height);

  // 設定 graphics 的背景顏色為黑色
  graphics.background(0);

  // 在 graphics 上繪製圓形
  for (let x = 0; x < graphics.width; x += 20) {
    for (let y = 0; y < graphics.height; y += 20) {
      // 從 capture 中取得對應位置的顏色
      let col = capture.get(x, y);
      graphics.fill(col);
      graphics.noStroke();
      graphics.ellipse(x + 10, y + 10, 15, 15); // 繪製寬高為 15 的圓形
    }
  }

  // 將 graphics 畫布顯示在攝影機影像的上方
  image(graphics, (width - graphics.width) / 2, (height - graphics.height) / 2 - graphics.height - 10);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  background('#d5bdaf');
}
