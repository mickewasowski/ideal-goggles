import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

function EqualizerWrapper(){

    return(
        <div class="page-container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default EqualizerWrapper;