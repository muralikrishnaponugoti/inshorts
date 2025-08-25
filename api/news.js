export default async function handler(req, res) {
  const {category,countary}=req.query;
  let url=''
  if(category && category!=='india'){
    console.log('called in category',category);
    url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=654765756`;
  }
  else{
    console.log('called in general',category);
    url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=756456465`;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('calling in api',data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
