import {ItemWrapper, Backdrop, H3} from './CreationItem.styles';
import {useEffect} from 'react';


function CreationItem({title, backgroundImage}){
    let windowWidth = window.innerWidth;
    let background = windowWidth > 1440 ? ('bg-' + backgroundImage + '-desktop') : ('bg-' + backgroundImage + '-mobile');

    let backdropID = title + '-backdrop';

    useEffect(() => {
        let wrapper = document.getElementById(title);
        wrapper.classList.add(background);
    }, []);


    const removeBackdrop = () => {
        let backdrop = document.getElementById(backdropID);
        backdrop.style.display = 'none';
    }

    const changeBackgroundOpacity = () => {
        let backdrop = document.getElementById(backdropID);
        backdrop.style.display = 'block';
    }

    return(
        <ItemWrapper id={title} onMouseLeave={removeBackdrop} onMouseEnter={changeBackgroundOpacity}>
            <Backdrop id={backdropID} style={{display: 'none'}}/>
            <H3 className="creation-item">{title.toUpperCase()}</H3>
        </ItemWrapper>
    )
}

export default CreationItem;