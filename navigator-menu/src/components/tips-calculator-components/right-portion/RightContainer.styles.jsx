import tw from 'tailwind-styled-components/dist/tailwind';

export const Container = tw.div`
    w-2/5
    h-4/5
    bg-tipsCalcRightBG
    rounded-xl
    flex
    flex-col
    items-center
    justify-around

    phone:w-11/12
    phone:h-3/5
    phone:py-[2rem]
`;

export const Wrapper = tw.div`
w-5/6
flex
items-center
justify-between
`;

export const Reset = tw.button`
inline-block
w-full
h-[3rem]
bg-tipsCalcResetBtn
rounded-md
text-tipsCalcResetBtnText
uppercase
font-bold
text-xl

hover:bg-tipsCalcResetBtnHover

phone:h-[2rem]
phone:mt-[1.5rem]
`;
