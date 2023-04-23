import {
  Wrapper,
  HeadingBtnContainer,
  Heading,
  BtnPrimary,
  CreationsContainer,
  MobileBtn,
} from './Creations.styles';

import CreationItem from './CreationItem';
import { useEffect, useState } from 'react';

const creationsArray = [
  {
    name: 'Deep Earth',
    image: 'deep-earth'
  },
  {
    name: 'Night arcade',
    image: 'night-arcade'
  },
  {
    name: 'Soccer team VR',
    image: 'soccer-team'
  },
  {
    name: 'The grid',
    image: 'grid'
  },
  {
    name: 'From up above VR',
    image: 'from-above'
  },
  {
    name: 'Pocket borealis',
    image: 'pocket-borealis'
  },
  {
    name: 'The curiosity',
    image: 'curiosity'
  },
  {
    name: 'Make it fisheye',
    image: 'fisheye'
  }
]

function Creations() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setIsMobile(true);
    }

    addEventListener('resize', handleResize);

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const handleResize = (event) => {
    const { target } = event;
    const { innerWidth } = target;

    if (innerWidth <= 1023 && !isMobile) {
      setIsMobile(!isMobile);
    } else if (innerWidth > 1023 && isMobile) {
      setIsMobile(false);
    }
  }

  return (
    <Wrapper id="creations-container">
      <HeadingBtnContainer>
        <Heading>Our creations</Heading>
        <BtnPrimary
          style={isMobile ? { display: 'none' } : { display: 'inline-block' }}
        >
          See all
        </BtnPrimary>
      </HeadingBtnContainer>
      <CreationsContainer id="creations">
        {
          creationsArray.map(x => {
            return <CreationItem key={x.name} title={x.name} backgroundImage={x.image} />
          })
        }
      </CreationsContainer>
      <MobileBtn
        style={isMobile ? { display: 'inline-block' } : { display: 'none' }}
      >
        See all
      </MobileBtn>
    </Wrapper>
  );
}

export default Creations;
