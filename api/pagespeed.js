const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Brak parametru URL' });
  }

  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=AIzaSyAw0FHoSCdjUKsqAvazQIqhL7Pik2ezOEQ`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Błąd API', details: error.message });
  }
};
