import tw from "tailwind-styled-components/dist/tailwind";
import {NavLink} from 'react-router-dom';

export const Wrapper = tw.footer`
    bg-genericBlack
    flex
    justify-between
    py-[3rem]
    px-[10rem]
    text-genericWhite
`

export const LeftContainer = tw.div`
    flex
    flex-col
    gap-6
`

export const Navigation = tw.ul`
    flex
`
export const ListItem = tw.li`
    mr-[2rem]
    pb-[1rem]

    hover:border-b-2
    hover:border-genericWhite
`


export const RightContainer = tw.div`
    flex
    flex-col
    gap-6
`

export const IconsContainer = tw.div`
    flex
    justify-end
`

export const AnchorTag = tw(NavLink)`
    ml-[2rem]
    pb-[1rem]
    border-b-2
    border-[#ffffff00]

    hover:border-b-2
    hover:border-genericWhite
`