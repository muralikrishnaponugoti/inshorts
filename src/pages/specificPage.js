import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNewsContext } from "../context/newsContext.js";
import styles from '../componentStyles/pageStyles.module.css';
function Specific(){
    const {articleId}=useParams();
    const{articles}=useNewsContext();
    useEffect(()=>{
        
    },[])
    return(
        <>
           {articles.length>0?
                <div className={styles.specificNews}>
                    <div>
                        <img src={articles[articleId].urlToImage} alt="img"/>
                    </div>
                    <div>
                        <div className={styles.newsDetail}>
                            <span>{articles[articleId].title}</span>
                            <span>{`short by ${articles[articleId].author}/${articles[articleId].publishedAt}`}</span>
                            <span>{articles[articleId].content}</span>
                        </div>
                        <a className={styles.srcLink} href={articles[articleId].url} target='/'>read more</a>
                    </div>
                </div>:<h1 className={styles.errMsg}>some thing went wrong try again</h1>
            }
        </>
    )
}

export default Specific;