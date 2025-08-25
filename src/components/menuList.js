import styles from '../componentStyles/pageStyles.module.css';
import { Link } from 'react-router-dom';
import { useNewsContext } from '../context/newsContext.js';
export default function MenuList(){
    const {setMenuOpend,isHindiLang,setIsHindiLng}=useNewsContext();
    function closeHandle(event){
        setMenuOpend((prevState)=>!prevState);

    }
    return (
        <>
        <section className={styles.menuList} id="menuList">
            <div className={styles.lngCngContainer}>
                <span><span>English</span><span>हिन्दी</span></span>
            </div>
            <div className={styles.categoriesContainer}>
                <p>Categories</p>
                <ul>
                  <Link to='/category/india' onClick={closeHandle}><li>India</li></Link>
                  <Link to='/category/business' onClick={closeHandle}><li>Business</li></Link>
                  <Link to='/category/politics' onClick={closeHandle}><li>Politics</li></Link>
                  <Link to='/category/sports' onClick={closeHandle}><li>Sports</li></Link>
                  <Link to='/category/Technology' onClick={closeHandle}><li>Technology</li></Link>
                  <Link to='/category/startups' onClick={closeHandle}><li>Startups</li></Link>
                  <Link to='/category/entertainment' onClick={closeHandle}><li>Entertainment</li></Link>
                  <Link to='/category/hatke' onClick={closeHandle}><li>Hatke</li></Link>
                  <Link to='/category/international' onClick={closeHandle}><li>International</li></Link>
                  <Link to='/category/automobile' onClick={closeHandle}><li>Automobile</li></Link>
                  <Link to='/category/science' onClick={closeHandle}><li>Science</li></Link>
                  <Link to='/category/travel' onClick={closeHandle}><li>Travel</li></Link>
                  <Link to='/category/miscellaneous' onClick={closeHandle}><li>Miscellaneous</li></Link>
                  <Link to='/category/fashion' onClick={closeHandle}><li>Fashion</li></Link>
                </ul>
            </div>
            <h2 onClick={closeHandle}>X</h2>
        </section>
        </>
    )
}