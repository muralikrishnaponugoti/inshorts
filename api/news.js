export default async function handler(req, res) {
  let {category,countary}=req.query;
  let url=''
  category=category.trim();
  if(category!=='undefined' && category!=='india'){
    url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5dc97cf8cdeb49d0b1152a08c8558652`;
  }
  else{
    url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=5dc97cf8cdeb49d0b1152a08c8558652`;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
