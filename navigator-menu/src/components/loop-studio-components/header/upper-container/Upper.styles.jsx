import tw from "tailwind-styled-components/dist/tailwind";
import {NavLink} from 'react-router-dom'

export const UpperContainer = tw.div`
    flex
    justify-between
    my-[5rem]
    mx-[9rem]
`

export const NavigationContainer = tw.div`
    flex
`

export const UL = tw.ul`
    flex
`

export const LiItem = tw.li`
list-none
mx-[1.5rem]
`

export const AnchorTag = tw(NavLink)`
    text-genericWhite
    no-underline
    py-[1rem]

    hover:border-solid
    hover:border-b-2
    hover:border-genericWhite
`
