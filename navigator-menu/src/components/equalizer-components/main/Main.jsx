import appleLogo from '../../../assets/equalizer/icon-apple.svg'
import androidLogo from '../../../assets/equalizer/icon-android.svg'
import appIllustration from '../../../assets/equalizer/illustration-app.png';

function Main(){

    return(
        <main>
            <div class="description-container">
                <h1 id="big-heading">We make your music sound extraordinary.</h1>
                <p>A system audio equalizer specifically designed for Android and iOS. Freely tune the
                way your music sounds with a professional grade parametric EQ & volume mixer. Control
                bass, mids, treble, gain control, reverb, and more!</p>
            </div>
            <div class="offer-container">
                <div id="app-illustration">
                <img src={appIllustration} alt="app-illustration" />
                </div>
                <div id="plan-container">
                <div id="plan-heading">
                    <h2>Premium EQ</h2>
                    <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take
                    your listening experience to a whole new level and access all our incredible features!</p>
                </div>
                <div id="price">
                    <p>
                    <strong>$4</strong>&nbsp;/&nbsp;month
                    </p>
                </div>
                <div id="download-btns">
                    <button id="apple">
                    <img src={appleLogo} />
                    iOS Download
                    </button>
                    <button id="android">
                    <img src={androidLogo} />
                    Android Download
                    </button>
                </div>
                </div>
            </div>
            </main>
    )
}

export default Main;