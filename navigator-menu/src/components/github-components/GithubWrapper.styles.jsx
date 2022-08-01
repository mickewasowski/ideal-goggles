import tw from "tailwind-styled-components/dist/tailwind";

export const Background = tw.div`
    font-space-mono
    w-full
    h-full
    m-0
    p-0
    bg-githubLightBg
    dark:bg-githubDarkBg

    flex
    justify-center
    items-center
`

export const PageContainer = tw.div`
    flex
    flex-col
    flex-wrap
    gap-[1.5rem]
    w-1/2
    mt-[10rem]
`