let capture;

function setup() {
  // 建立全螢幕畫布，背景顏色為 d5bdaf
  createCanvas(windowWidth, windowHeight);
  background('#d5bdaf');

  // 初始化攝影機
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 隱藏原始攝影機畫面
}

function draw() {
  // 將攝影機影像左右顛倒後顯示在視窗的中間
  translate(width, 0); // 將畫布的原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2, capture.width, capture.height);

  // 在攝影機影像上繪製圓形
  for (let x = 0; x < capture.width; x += 20) {
    for (let y = 0; y < capture.height; y += 20) {
      // 從 capture 中取得對應位置的顏色
      let col = capture.get(x, y);
      fill(col);
      noStroke();
      // 計算圓的位置，將其繪製在攝影機影像上
      let drawX = (width - capture.width) / 2 + x;
      let drawY = (height - capture.height) / 2 + y;
      ellipse(drawX, drawY, 15, 15); // 繪製寬高為 15 的圓形
    }
  }
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  background('#d5bdaf');
}
