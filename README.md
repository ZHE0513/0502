產生一個全螢幕的畫布,背景顏色為d5bdaf
擷取攝影機的影像,正常的顯示在視窗的中間
影像畫面的寬高為視窗大小的80%,
請把程式碼寫在sketch.js內
功能說明：
全螢幕畫布：使用 createCanvas(windowWidth, windowHeight) 建立全螢幕畫布。
背景顏色：設定背景顏色為 #d5bdaf。
攝影機影像：使用 createCapture(VIDEO) 擷取攝影機影像，並設定影像大小為視窗的 80%。
影像置中：透過計算 (windowWidth - capture.width) / 2 和 (windowHeight - capture.height) / 2，將影像置中顯示。
視窗調整：當視窗大小改變時，使用 windowResized() 重新調整畫布大小並重繪背景。
