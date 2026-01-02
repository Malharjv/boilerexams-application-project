export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  const { id } = req.query;
  
  try {
    const response = await fetch(`https://api.boilerexams.com/questions/${id}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch question' });
    }
    
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch question' });
  }
}
