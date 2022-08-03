import profilePic from '../../../../assets/github/octocat.png';

import {Wrapper,MainInfo,PicAndUsernameWrapper,ProfilePicture,H2,H4,JoinedWrapper,JoinedParag,BioWrapper,BioParag} from './Left.styles';

function Left(){

    return(
        <Wrapper>
            <MainInfo>
                <PicAndUsernameWrapper>
                    <ProfilePicture src={profilePic} alt="profile-picture" />
                    <H2>The Octocat</H2>
                    <H4>@octocat</H4>
                </PicAndUsernameWrapper>
                <JoinedWrapper>
                    <JoinedParag>Joined 25 Jan 2011</JoinedParag>
                </JoinedWrapper>
                <BioWrapper>
                    <BioParag>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BioParag>
                </BioWrapper>
            </MainInfo>
        </Wrapper>
    )
}

export default Left;