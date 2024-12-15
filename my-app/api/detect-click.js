// api/detect-click.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Mengambil data yang dikirimkan dari client
    const { buttonClicked } = req.body;

    // Di sini Anda bisa melakukan apa pun, misalnya menyimpan data atau mengirim pemberitahuan
    console.log('Tombol OK diklik:', buttonClicked);

    // Kirim response kembali ke client
    res.status(200).json({ status: 'OK', message: 'Klik diterima' });
  } else {
    // Jika request bukan POST, beri status error
    res.status(405).json({ status: 'Error', message: 'Method not allowed' });
  }
}
