import { useEffect } from "react"
import { useNewsContext } from "../context/newsContext.js"
import styles from '../componentStyles/pageStyles.module.css';
import NewsCard from "./newsCard.js";
function NewsList(){
    const {articles,setArticles}=useNewsContext();
    useEffect(()=>{
        if(articles.length<=0){
            fetch('../../api/news')
            .then(response=>response.json())
            .then(data=>{
                const temp=data.articles.map(article=>({...article,content:article.content?.slice(0,-13)}));
                setArticles(temp);
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
            {articles.length>0?articles.map((article,index)=><NewsCard  id={index}article={article} key={index}/>):null}
        </>
    )
}

export default NewsList