import {Wrapper, HeadingBtnContainer, Heading, BtnPrimary, CreationsContainer} from './Creations.styles';

import CreationItem from './CreationItem';

function Creations(){

    const removeBackdrop = () => {
        console.log('remove');
    }

    const changeBackgroundOpacity = () => {
        console.log('change opacity');
    }

    return(
        <Wrapper id="creations-container">
            <HeadingBtnContainer>
                <Heading>Our creations</Heading>
                <BtnPrimary>See all</BtnPrimary>
            </HeadingBtnContainer>
            <CreationsContainer id="creations">
                <CreationItem title={'Deep Earth'} backgroundImage={'deep-earth'}/>
                <CreationItem title={'Night arcade'} backgroundImage={'night-arcade'}/>
                <CreationItem title={'Soccer team VR'} backgroundImage={'soccer-team'}/>
                <CreationItem title={'The grid'} backgroundImage={'grid'}/>
                <CreationItem title={'From up above VR'} backgroundImage={'from-above'}/>
                <CreationItem title={'Pocket borealis'} backgroundImage={'pocket-borealis'}/>
                <CreationItem title={'The curiosity'} backgroundImage={'curiosity'}/>
                <CreationItem title={'Make it fisheye'} backgroundImage={'fisheye'}/>
            </CreationsContainer>
            <button style={{display: "none"}}>See all</button>
        </Wrapper>
    )
}

export default Creations;