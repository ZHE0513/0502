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
  // 將攝影機影像顯示在視窗的中間
  image(capture, (windowWidth - capture.width) / 2, (windowHeight - capture.height) / 2, capture.width, capture.height);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  background('#d5bdaf');
}
