import appleLogo from '/assets/equalizer/icon-apple.svg';
import androidLogo from '/assets/equalizer/icon-android.svg';
import appIllustration from '/assets/equalizer/illustration-app.png';

import {
  DescriptionContainer,
  BigHeading,
  Parag,
  OfferContainer,
  AppIllustrationContainer,
  AppImage,
  PlanContainer,
  Headings,
  H2,
  HeadingsParag,
  Prices,
  PricesParag,
  StrongTag,
  Btns,
  AppleBtn,
  AndroidBtn,
} from './Main.styles';

function Main() {

  return (
    <main>
      <DescriptionContainer>
        <BigHeading>We make your music sound extraordinary.</BigHeading>
        <Parag>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </Parag>
      </DescriptionContainer>
      <OfferContainer
        style={{ backgroundImage: 'url(/assets/equalizer/bg-pattern-2.svg)' }}
      >
        <AppIllustrationContainer>
          <AppImage src={appIllustration} alt="app-illustration" />
        </AppIllustrationContainer>
        <PlanContainer>
          <Headings>
            <H2>Premium EQ</H2>
            <HeadingsParag>
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </HeadingsParag>
          </Headings>
          <Prices>
            <PricesParag>
              <StrongTag>$4</StrongTag>&nbsp;/&nbsp;month
            </PricesParag>
          </Prices>
          <Btns>
            <AppleBtn>
              <img src={appleLogo} />
              iOS Download
            </AppleBtn>
            <AndroidBtn>
              <img src={androidLogo} />
              Android Download
            </AndroidBtn>
          </Btns>
        </PlanContainer>
      </OfferContainer>
    </main>
  );
}

export default Main;
