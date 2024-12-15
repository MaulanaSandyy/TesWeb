document.getElementById('okButton').addEventListener('click', function() {
  alert('Tombol OK diklik!');
  
  // Kirim informasi ke serverless function Vercel
  fetch('/api/detect-click', {
    method: 'POST',
    body: JSON.stringify({ buttonClicked: true }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log('Data berhasil dikirim:', data))
  .catch(error => console.error('Terjadi kesalahan:', error));
});
