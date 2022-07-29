import logo from '../../../assets/equalizer/logo.svg';


function Header(){

    return(
        <header>
            <div class="logo-container">
                <img src={logo} />
            </div>
        </header>
    )
}

export default Header;