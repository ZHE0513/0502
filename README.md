# 20250502上課筆記

## 第一條指令
產生一個全螢幕的畫布,背景顏色為d5bdaf
擷取攝影機的影像,正常的顯示在視窗的中間
影像畫面的寬高為視窗大小的80%,
請把程式碼寫在sketch.js內
### 說明
createCanvas(windowWidth, windowHeight)：建立全螢幕的畫布。
background('#d5bdaf')：設定背景顏色為 #d5bdaf。
createCapture(VIDEO)：啟用攝影機。
capture.size(windowWidth * 0.8, windowHeight * 0.8)：設定攝影機影像的寬高為視窗大小的 80%。
image()：將攝影機影像繪製在畫布上，並置中顯示。
windowResized()：當視窗大小改變時，重新調整畫布大小並重繪背景。
### 程式碼 
```javascript=
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

```
## 第二條指令

攝影機顯示的畫面,左右顛倒,請調整

## 說明
 
translate(width, 0)：將畫布的原點移到右上角。
scale(-1, 1)：水平翻轉畫布，實現影像左右顛倒。
image()：繪製翻轉後的攝影機影像，並置中顯示。

### 程式碼 
```javascript=
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
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  background('#d5bdaf');
}
