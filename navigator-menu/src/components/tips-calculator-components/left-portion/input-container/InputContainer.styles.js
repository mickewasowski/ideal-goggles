import tw from 'tailwind-styled-components';

export const Container = tw.div`
h-1/5
`;

export const Label = tw.label`
    text-lg
    font-bold
    text-tipsCalcLabelTextColor
`;

export const InputWrapper = tw.div`
    bg-tipsCalcInputDivBG
    h-1/2
    rounded-md
    flex
    justify-between
    items-center
    px-4
    mt-2

    hover:outline-2
    hover:outline
    hover:outline-tipsCalcInputDivOutline
    hover:cursor-pointer
`;

export const Input = tw.input`
    w-4/5
    h-2/4
    border-none
    text-right
    text-tipsCalcInputColor
    text-2xl
    font-bold

    focus:outline-none
`;
