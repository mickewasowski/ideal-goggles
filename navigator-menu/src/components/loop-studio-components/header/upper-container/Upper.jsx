import logo from '../../../../assets/loop-studio/logo.svg';
import hamburger from '../../../../assets/loop-studio/icon-hamburger.svg'
import closeMenu from '../../../../assets/loop-studio/icon-close.svg'

function Upper(){

    const toggleNavigation = () => {
        console.log('toggle');
    }

    return(
        <div id="upper" style={{backgroundColor: "blueviolet"}}>
            <div id="logo-container">
                <img src={logo} />
            </div>
            <div id="navigation-toggle" onClick={toggleNavigation}>
                <img src={hamburger}/>
            </div>
            <div id="navigation-container">
                <div id="mobile-logo" style={{display: "block"}}>
                    <img src={logo} />
                    <span onClick={toggleNavigation}>
                        <img src={closeMenu} />
                    </span>
                </div>
                <nav id="nav-tag">
                    {/* <!-- style="display: block;" --> */}
                    <ul id="nav-ul">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Upper;