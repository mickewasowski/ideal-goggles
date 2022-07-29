import facebookLogo from '../../../assets/equalizer/icon-facebook.svg'
import instagramLogo from '../../../assets/equalizer/icon-instagram.svg'
import twitterLogo from '../../../assets/equalizer/icon-twitter.svg'
import logo from '../../../assets/equalizer/logo.svg';

function Footer(){

    return(
        <footer>
            <div>
                <img src={logo} />
            </div>
            <div id="copyright">
                <p>All rights reserved © Equalizer 2021</p>
                <p>Have any problems? Contact us via social media or email us at <strong>equalizer@example.com</strong></p>
            </div>
            <div id="icons">
                <a href="">
                    <img src={facebookLogo}/>
                </a>
                <a href="">
                    <img src={instagramLogo}/>
                </a>
                <a href="">
                    <img src={twitterLogo}/>
                </a>
            </div>
        </footer>
    )
}


export default Footer;