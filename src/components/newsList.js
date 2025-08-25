import { useEffect, useState } from "react"
import { useNewsContext } from "../context/newsContext.js"
import styles from '../componentStyles/pageStyles.module.css';
import NewsCard from "./newsCard.js";
import { useParams } from "react-router-dom";
// `../../api/news?category=${category}&country=in`
function NewsList(){
    const {articles,setArticles,menuOpend,setMenuOpend}=useNewsContext();
    const {category}=useParams();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setLoading(true);
        setArticles([]);
    },[category])

    useEffect(()=>{
        let url=`../../api/news?category=${category}&country=us`
        // if(category && category!=='india')
        //     url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5dc97cf8cdeb49d0b1152a08c8558652`
        // else
        //     url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=5dc97cf8cdeb49d0b1152a08c8558652`

        if(articles.length<=0){
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                // console.log(data);
                const temp=data.articles.map(article=>({...article,content:article.content?.slice(0,-13)}));
                console.log(temp);    
                if(temp.length>0){
                    setArticles(temp);
                    console.log(temp);
                }
                setTimeout(()=>{
                    setLoading(false)
                },2000)
            })
            .catch(error=>{
                console.log(error);
            })
        }
        
    },[articles])



    return (
        <>
            <div className={styles.msgBox}>
                <p>For the best Experience use<span> InShorts</span> app on your smartphone</p>
                <div>
                    <div className={styles.appStore}><img src="https://static.vecteezy.com/system/resources/previews/002/520/835/original/download-application-button-apple-app-store-free-vector.jpg" alt="img"/></div>
                    <div className={styles.playStore}><img src="https://res.cloudinary.com/ds57cmzxo/image/upload/f_auto,q_80/Webseite/grafiken/play-store-logo" alt="img"/></div>
                </div>
            </div>
            {articles.length>0?articles.map((article,index)=><NewsCard  id={index}article={article} key={index}/>):loading?<h1>Loading........</h1>:<h1>some thing went wrong pleast try again</h1>}
        </>
    )
}

export default NewsList
