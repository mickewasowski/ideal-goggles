import LogoWrapper from './logoWrapper/LogoWrapper';
import LeftContainer from './left-portion/LeftContainer';
import RightContainer from './right-portion/RightContainer';
import { Wrapper, PageContainer } from './TipsCalculatorWrapper.styles';

function TipsCalculatorWrapper() {
  return (
    <Wrapper>
      <LogoWrapper />
      <PageContainer>
        <LeftContainer />
        <RightContainer />
      </PageContainer>
    </Wrapper>
  );
}

export default TipsCalculatorWrapper;
