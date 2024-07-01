document.addEventListener('DOMContentLoaded', () => {
    const codeReader = new ZXing.BrowserQRCodeReader();
    const videoElement = document.getElementById('preview');
    const messageElement = document.getElementById('message');

    codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
        if (result) {
            const url = result.getText();
            if (url.startsWith("https://go.walking-cat.com")) {
                window.location.href = url;
            } else {
                messageElement.textContent = "無效的網址，僅允許https://go.walking-cat.com 前綴的網址";
            }
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
            console.error(err);
            messageElement.textContent = "掃描錯誤，請重試。";
        }
    });
});
