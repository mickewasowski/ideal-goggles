import DesktopMainCarousel from "./shoe-images/DesktopMainCarousel";
import DetailsAndBtns from "./details-and-buttons/DetailsAndBtns";

import {Wrapper} from './Main.styles';

function Main(){

    return(
      <Wrapper>
        <DesktopMainCarousel />
        <DetailsAndBtns />
      </Wrapper>
    )
}

export default Main;