import tw from 'tailwind-styled-components';

export const Wrapper = tw.main`
    mt-[5rem]
    mx-[3rem]
    flex
    justify-around

    phone:flex-col
    phone:m-0

    tablet:flex-col
    tablet:m-0

    laptop:justify-evenly
    laptop:mx-0
`;
