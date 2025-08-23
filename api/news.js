export default async function handler(req, res) {
  try {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5dc97cf8cdeb49d0b1152a08c8558652');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}