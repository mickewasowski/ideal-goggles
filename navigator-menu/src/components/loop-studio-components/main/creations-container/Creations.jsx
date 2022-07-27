import {Wrapper, HeadingBtnContainer, Heading, BtnPrimary, CreationsContainer, MobileBtn} from './Creations.styles';

import CreationItem from './CreationItem';

function Creations(){

    let isMobile = window.innerWidth < 1440 ? true : false;

    return(
        <Wrapper id="creations-container">
            <HeadingBtnContainer>
                <Heading>Our creations</Heading>
                <BtnPrimary style={isMobile ? {display: 'none'} : {display:'inline-block'}}>See all</BtnPrimary>
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
            <MobileBtn style={isMobile ? {display: 'inline-block'} : {display: "none"}}>See all</MobileBtn>
        </Wrapper>
    )
}

export default Creations;