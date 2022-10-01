import '../../index.css';
import RouteBtn from './route-btn/Routebtn-Component';
import {
  HomeHeadingWrapper,
  H1,
  H3,
  HomeCardsWrapper,
} from './Home-landing.styles';

function Home() {
  return (
    <>
      <HomeHeadingWrapper id="homeHeading">
        <H1>All Projects Combined.</H1>
        <H3>A navigational menu for all N2J Academy projects.</H3>
      </HomeHeadingWrapper>
      <HomeCardsWrapper>
        <RouteBtn
          path={'project/tips-calculator'}
          imageSource={'./images/tipscalculator-thumbnail.jpg'}
        >
          Tips Calculator
        </RouteBtn>
        <RouteBtn
          path={'project/github'}
          imageSource={'./images/github-thumbnail.jpg'}
        >
          Github
        </RouteBtn>
        <RouteBtn
          path={'project/e-commerce'}
          imageSource={'./images/e-commerce-thumbnail.jpg'}
        >
          E-Commerce
        </RouteBtn>
        <RouteBtn
          path={'project/loop-studio'}
          imageSource={'./images/loopstudio-thumbnail.jpg'}
        >
          Loop-studio
        </RouteBtn>
        <RouteBtn
          path={'project/equalizer'}
          imageSource={'./images/equalizer-thumbnail.jpg'}
        >
          Equalizer
        </RouteBtn>
      </HomeCardsWrapper>
    </>
  );
}

export default Home;
