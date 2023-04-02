import Desctiption from './description-container/Description';
import Creations from './creations-container/Creations';

import { Wrapper } from './Main.styles';

function Main() {
  return (
    <Wrapper>
      <Desctiption />
      <Creations />
    </Wrapper>
  );
}

export default Main;
