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
```

## 第三條指令

利用createGraphics指令,產生一個video視訊畫面
一樣的寬高一樣的大小內容,該圖片顯示在視訊畫面的上方


## 說明

createGraphics：建立一個與攝影機影像相同大小的畫布，用於繪製視訊畫面。
graphics.push() 和 graphics.pop()：確保翻轉操作只影響 graphics 畫布，不影響主畫布。
image(graphics, ...)：將 graphics 畫布顯示在攝影機影像的上方，並稍微向上偏移。

### 程式碼 
```javascript=
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
  translate(width, 0); // 將畫布的原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2, capture.width, capture.height);

  // 在 graphics 上繪製與攝影機相同的內容
  graphics.push();
  graphics.translate(graphics.width, 0);
  graphics.scale(-1, 1);
  graphics.image(capture, 0, 0, graphics.width, graphics.height);
  graphics.pop();

  // 將 graphics 畫布顯示在攝影機影像的上方
  image(graphics, (width - graphics.width) / 2, (height - graphics.height) / 2 - graphics.height - 10);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  background('#d5bdaf');
}

```

## 第四條指令

把graphics的背景顏色為黑色
graphics在寬與高每隔20為一個單位
在每個單位內產生一個寬高為15的圓
圓的顏色採用capture相對位置的顏色

## 說明

graphics.background(0)：將 graphics 的背景設為黑色。
雙層迴圈：每隔 20 單位在 graphics 上繪製圓形。
capture.get(x, y)：從攝影機影像中取得對應位置的顏色。
graphics.ellipse(x + 10, y + 10, 15, 15)：在每個單位內繪製寬高為 15 的圓形，並置中。
image(graphics, ...)：將 graphics 畫布顯示在攝影機影像的上方。

### 程式碼 
```javascript=
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
  translate(width, 0); // 將畫布的原點移到右上角
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
```
## 第五條指令
幫我把圓圈放置攝像頭裡
## 說明
移除 graphics：不再使用 createGraphics，直接在主畫布上繪製圓圈。
計算圓的位置：
使用 (width - capture.width) / 2 + x 和 (height - capture.height) / 2 + y，將圓圈繪製在攝影機影像的正確位置。
圓形顏色：從 capture.get(x, y) 取得對應位置的顏色，並用 fill(col) 設定。

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
```
## 第六條指令
取消在graphics每個單位上面的圓,
改為寬為18的方框,中間有個5的圓,圓的顏色為黑色,
方框的顏色採用capture相對位置的顏色

## 說明
方框繪製：
使用 graphics.rect(x + 1, y + 1, 18, 18) 繪製寬高為 18 的方框。
方框的顏色來自 capture.get(x, y)。
內部圓形：
使用 graphics.ellipse(x + 10, y + 10, 5, 5) 在方框內繪製一個直徑為 5 的黑色圓形。
圓形的顏色固定為黑色，使用 graphics.fill(0)。

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

  // 在攝影機影像上繪製方框和內部的圓
  for (let x = 0; x < capture.width; x += 20) {
    for (let y = 0; y < capture.height; y += 20) {
      // 從 capture 中取得對應位置的顏色
      let col = capture.get(x, y);
      fill(col);
      noStroke();
      // 繪製寬為 18 的方框
      rect(x + 1, y + 1, 18, 18);

      // 在方框內繪製一個黑色的圓
      fill(0);
      ellipse(x + 10, y + 10, 5, 5);
    }
  }
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  background('#d5bdaf');
}
```
