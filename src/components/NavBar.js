import styles from '../componentStyles/pageStyles.module.css';
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useNewsContext } from '../context/newsContext.js';
import NewsList from './newsList.js';
import Footer from './footer.js';
function NavBar(){
    const{}=useNewsContext();
    return(
        <>
            <nav>
                <div className={styles.menuContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="32" viewBox="0,0,256,256">
                        <g fill="#9f9f9f" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                            </g>
                        </g>
                    </svg>
                    <h5>Menu</h5>
                </div>
                <div>
                    <img src="https://www.yourtechstory.com/wp-content/uploads/2019/06/inshorts.png" alt="img"/>
                </div>
            </nav>
            <Outlet/>
            <Footer/>
        </>
    );
}
export default NavBar;
