document.getElementById('generate').addEventListener('click', () => {
    const data = document.getElementById('data').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    const bgColor = document.getElementById('bgColor').value;

    if (!data) {
        alert('Please enter some data to generate QR Code');
        return;
    }

    const qr = new QRious({
        element: document.getElementById('qrcode'),
        value: data,
        size: size,
        level: 'H',
        foreground: color,
        background: bgColor
    });

    document.getElementById('download').style.display = 'block';
});

document.getElementById('download').addEventListener('click', () => {
    const canvas = document.getElementById('qrcode');
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qr-code.png';
    link.click();
});
