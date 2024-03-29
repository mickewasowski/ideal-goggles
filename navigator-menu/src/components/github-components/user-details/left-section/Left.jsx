import { GithubContext } from '../../../../contexts/github/GithubContext';

import {
  Wrapper,
  MainInfo,
  PicAndUsernameWrapper,
  ProfilePicture,
  H2,
  H4,
  JoinedParag,
  BioWrapper,
  BioParag,
} from './Left.styles';
import { useContext } from 'react';

function Left() {
  const { data } = useContext(GithubContext);

  return (
    <Wrapper>
      <MainInfo>
        <PicAndUsernameWrapper>
          <ProfilePicture src={data.avatar} alt="profile-picture" />
          <div>
            <H2>{data.name}</H2>
            <H4>@{data.login}</H4>
            <JoinedParag>Joined {data.createdAt}</JoinedParag>
          </div>
        </PicAndUsernameWrapper>
        {/* <JoinedWrapper>
                </JoinedWrapper> */}
        <BioWrapper>
          <BioParag>{data.bio ? data.bio : 'No bio...'}</BioParag>
        </BioWrapper>
      </MainInfo>
    </Wrapper>
  );
}

export default Left;
