import {Wrapper, VRGoggles, DescriptionContainer, Heading, Parag} from './Description.styles';

function Desctiption(){

    return(
        <Wrapper id="description-container">
            <VRGoggles></VRGoggles>
            <DescriptionContainer>
                <Heading>The leader in interactive VR</Heading>
                <Parag>Founded in 2011, Loopstudios has been producing world-class virtual reality
                projects for some of the best companies around the globe. Our award-winning
                creations have transformed businesses through digital experiences that bind
                to their brand.</Parag>
            </DescriptionContainer>
        </Wrapper>
    )
}

export default Desctiption;