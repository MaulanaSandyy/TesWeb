document.getElementById('okButton').addEventListener('click', function() {
  alert('Tombol OK diklik!');
  
  // Ambil informasi device dari user agent
  const userAgent = navigator.userAgent;

  // Kirim data ke serverless function di Vercel
  fetch('/api/detect-click', {
    method: 'POST',
    body: JSON.stringify({
      buttonClicked: true,
      userAgent: userAgent
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('berhasil', data);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });
});
