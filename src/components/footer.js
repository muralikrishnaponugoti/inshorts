import styles from '../componentStyles/pageStyles.module.css'
function Footer(){
    return(
        <>
            <footer>
                <div>
                   <div>
                    <div className={styles.copyrighContainer}>
                        <div>
                            <img src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt='img'></img>
                        </div>
                        <span>
                            <span>inshorts <span>Pte. Ltd.</span></span>©COPYRIGHT 2025
                        </span>
                    </div>
                    <span></span>
                    <div className={styles.contactContainer}>
                        <span>Contact Us</span>
                        <span>Terms & conditions</span>
                        <span>Privacy Policies</span>
                    </div>
                   </div>
                   <div className={styles.socialMedia}>
                        <img src="https://assets.inshorts.com/website_assets/images/facebook.png" alt="fb"></img>
                        <img src="https://assets.inshorts.com/website_assets/images/twitter.png" alt="twt"></img>
                        <img src="https://assets.inshorts.com/website_assets/images/linkedin.png" alt="linked"></img>
                   </div> 
                </div>
















                {/* <div>
                    <div className={styles.linksContainer}>
                        <ul>
                            <li>Contact us</li>
                            <li>Terms and Condations</li>
                            <li>Privacy Policay</li>
                        </ul>
                        <ul>
                            <li>facebook</li>
                            <li>Twitter</li>
                            <li>Email</li>
                        </ul>

                    </div>
                    <div className={styles.imageContainer}>
                        <img src="https://www.yourtechstory.com/wp-content/uploads/2019/06/inshorts.png" alt="img"/>
                    </div>
                    <h2 className={styles.copyRights}> Copy rights reserved by inshortsNews 2025</h2>
                </div> */}
            </footer>
        </>
    )
}

export default Footer;