export default function handler(req, res) {
  if (req.method === 'POST') {
    // Mengambil data yang dikirimkan dari client
    const { buttonClicked, userAgent } = req.body;

    // Mengambil IP address dari header X-Forwarded-For (Vercel menyediakannya)
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Log IP address dan user agent ke console (bisa dikembangkan untuk menyimpan ke database)
    console.log('IP Address:', ipAddress);
    console.log('User-Agent:', userAgent);

    // Parse user agent untuk mendapatkan merk perangkat
    const deviceInfo = parseUserAgent(userAgent);

    // Kirim response kembali ke client
    res.status(200).json({
      status: 'OK',
      message: 'Klik diterima',
      ipAddress: ipAddress,
      deviceInfo: deviceInfo
    });
  } else {
    res.status(405).json({ status: 'Error', message: 'Method not allowed' });
  }
}

// Fungsi untuk mengekstrak informasi dari user-agent
function parseUserAgent(userAgent) {
  const deviceInfo = {};

  if (userAgent.match(/iPhone/i)) {
    deviceInfo.device = 'iPhone';
  } else if (userAgent.match(/iPad/i)) {
    deviceInfo.device = 'iPad';
  } else if (userAgent.match(/Android/i)) {
    deviceInfo.device = 'Android';
  } else {
    deviceInfo.device = 'Unknown Device';
  }

  return deviceInfo;
}
