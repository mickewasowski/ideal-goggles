import tw from 'tailwind-styled-components';

export const DescriptionContainer = tw.div`
w-4/6

phone:w-full
`;

export const BigHeading = tw.h1`
    text-[5.5rem]
    mt-0
    mr-0
    font-bold
    w-11/12

    phone:text-[2.5rem]
    phone:w-auto
    phone:px-[1rem]
    phone:py-0

    tablet:w-auto
    tablet:text-[2.5rem]
`;

export const Parag = tw.p`
    w-11/12
    text-[1.25rem]

    phone:w-auto
    phone:px-[1rem]
    phone:py-0
`;

export const OfferContainer = tw.div`
    bg-offer-desktop-bg
    bg-no-repeat
    bg-equalizerOfferBg
    rounded-xl
    flex
    justify-around
    mt-[20rem]

    phone:flex-col
    phone:items-center
    phone:mt-[12rem]
    phone:bg-75%
    phone:bg-[51%_5%]

    tablet:bg-27%
    tablet:bg-[51%_-31%]

    laptop:bg-35%
    laptop:bg-[52%_0%]

    desktop:bg-27%
    desktop:bg-[43%_-4%]
`;

export const AppIllustrationContainer = tw.div`
    translate-x-0
    -translate-y-[214px]

    phone:-translate-y-[101px]

    tablet:translate-x-[58px]
    tablet:-translate-y-[214px]
`;

export const AppImage = tw.img`
    w-[19.5rem]
    h-[40.125rem]

    phone:w-full
    phone:h-[28rem]
`;

export const PlanContainer = tw.div`
    w-[27.9rem]
    h-[39rem]
    bg-equalizerPlanBg
    rounded-xl
    flex
    flex-col
    items-center
    justify-around
    translate-x-0
    translate-y-[115px]

    phone:w-full
    phone:translate-y-0

    tablet:w-[55%]
    tablet:-translate-x-[2.8rem]
    tablet:translate-y-[8.6rem]
`;

export const Headings = tw.div`
w-4/5
`;

export const H2 = tw.h2`
    text-[2.5rem]
    text-equalizerPlanText
    text-left
    font-bold
`;

export const HeadingsParag = tw.p`
text-[1.25rem]
text-equalizerPlanText
text-left
`;

export const Prices = tw.div`
w-4/5
`;

export const PricesParag = tw.p`
    flex
    items-center
    text-equalizerPlanText
`;

export const StrongTag = tw.strong`
    text-[4rem]
    mr-[.8rem]
`;

export const Btns = tw.div`
w-4/5
flex
flex-col
items-center
justify-around
h-[11.75rem]
`;

export const AppleBtn = tw.button`
    w-full
    h-[4rem]
    rounded-xl
    border-none
    text-[1.2rem]
    font-bold
    text-center
    flex
    justify-center
    items-center
    gap-[.4rem]
    bg-equalizerAppleBtnBg
    text-equalizerPlanText

    hover:bg-equalizerAppleBtnBgHover
`;

export const AndroidBtn = tw.button`
    w-full
    h-[4rem]
    rounded-xl
    border-none
    text-[1.2rem]
    font-bold
    text-center
    flex
    justify-center
    items-center
    gap-[.4rem]
    bg-equalizerAndroidBtnBg
    text-equalizerAndroidBtnText

    hover:bg-equalizerAndroidBtnBgHover
`;
