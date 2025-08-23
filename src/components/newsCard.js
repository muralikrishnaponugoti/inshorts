import styles from '../componentStyles/pageStyles.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function NewsCard({article,id}){
    const navigate=useNavigate();
    function specificHandle(event){
        event.preventDefault();
        event.stopPropagation();
        navigate(`/specific/${event.currentTarget.id}`);
    }








    return(
        <>
            <div >
                <div className={styles.newsCard} id={id} onClick={specificHandle}>
                    <div> 
                        <img src={article.urlToImage} alt="img"/>
                    </div>
                    <div>
                        <div className={styles.newsDetail}>
                            <span>{article.title}</span>
                            <span>{`short by ${article.author}/${article.publishedAt}`}</span>
                            <span>{article.content}</span>
                        </div>
                        <a className={styles.srcLink} href={article.url} target='/'>read more</a>
                    </div>
                </div>
            </div>

            {/* <div className={styles.newsCard}>
                <div> 
                    <img src="https://nis-gs.pix.in/inshorts/images/v1/variants/webp/xs/2025/08_aug/21_thu/img_1755791913319_550.webp?&quot" alt="img"/>
                </div>
                <div>
                    <div className={styles.newsDetail}>
                        <span>What is the Bronco Test that Team India players will undergo?</span>
                        <span>short  by Anmol Sharma / 09:39 pm  on Thursday 21 August, 2025</span>
                        <span>A rugby-centric Bronco Test has been introduced by the BCCI for Team India players. The fitness test requires running 20 metres, 40 metres, and 60 metres shuttles with one set totalling 120 metres. Players must finish five such sets continuously, covering a total distance of 1.2 kilometres. Team India players have been tasked with completing the test within six minutes.</span>
                    </div>
                    <a className={styles.srcLink} href='https://www.crictracker.com/cricket-appeal/what-is-bronco-test-in-cricket-all-you-need-to-know/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts' target='/'>read more</a>
                </div>
            </div> */}
        </>
    )
}
export default NewsCard;