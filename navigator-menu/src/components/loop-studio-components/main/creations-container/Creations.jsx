

function Creations(){

    const removeBackdrop = () => {
        console.log('remove');
    }

    const changeBackgroundOpacity = () => {
        console.log('change opacity');
    }

    return(
        <div id="creations-container">
            <div id="heading-button-container">
                <h2>Our creations</h2>
                <button>See all</button>
            </div>
            <div id="creations">
                <div className="creation-item" onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
                <div className="backdrop" style={{display: "none"}}></div>
                <h3 className="creation-item">Deep earth</h3>
                </div>
                <div className="creation-item" onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
                <div className="backdrop" style={{display: "none"}}></div>
                <h3 className="creation-item">Night arcade</h3>
                </div>
                <div className="creation-item" onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
                <div className="backdrop" style={{display: "none"}}></div>
                <h3 className="creation-item">Soccer team VR</h3>
                </div>
                <div className="creation-item" onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
                <div className="backdrop" style={{display: "none"}}></div>
                <h3 className="creation-item">The grid</h3>
                </div>
                <div className="creation-item" onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
                <div className="backdrop" style={{display: "none"}}></div>
                <h3 className="creation-item">From up above VR</h3>
                </div>
                <div className="creation-item" onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
                <div className="backdrop" style={{display: "none"}}></div>
                <h3 className="creation-item">Pocket borealis</h3>
                </div>
                <div className="creation-item" onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
                <div className="backdrop" style={{display: "none"}}></div>
                <h3 className="creation-item">The curiosity</h3>
                </div>
                <div className="creation-item" onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
                <div className="backdrop" style={{display: "none"}}></div>
                <h3 className="creation-item">Make it fisheye</h3>
                </div>
            </div>
            <button>See all</button>
            </div>
    )
}

export default Creations;