import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components/dist/tailwind";

export const ButtonsContainer = tw.div`
flex
justify-start
`

export const LogoContainer = tw.div`
    flex
    mr-[1.1rem]
    items-center
`

export const AnchorTag = tw(NavLink)`
    justify-center
    self-center
`

export const NavigationContainer = tw.div`
    flex
    items-center
    m-[.6rem]

    phone:hidden
    phone:z-20
    phone:w-3/5
    phone:h-screen
    phone:m-0
    phone:absolute
    phone:left-0
    phone:bg-genericWhite
    phone:flex-col
    phone:items-start
    phone:justify-start
    phone:pl-[1rem]
    phone:pt-[1rem]
`

export const Navigation = tw.nav`
    flex

    phone:flex-col
`

export const Ul = tw.ul`
    flex
    items-center
    justify-center

    phone:flex-col
    phone:items-start
    phone:mt-[2.5rem]
`

export const LiItem = tw.li`
    m-[.7rem]
    py-[2.25rem]
    list-none
    text-eComNavTextColor
    border-b-2
    border-eComHeaderBorder

    hover:border-eComNavTextBorderHover
    hover:cursor-pointer
    hover:text-eComNavTextColorHover

    phone:text-eComNavTextColorHover
    phone:font-bold
    phone:p-0
    phone:text-left
    phone:border-none
    phone:m-0
    phone:my-[.7rem]
    phone:text-[1.2rem]
`

export const CloseIcon = tw.span`
hidden

phone:inline-block
phone:mt-[.5rem]
`

export const Backdrop = tw.div`
    hidden

    phone:bg-genericBlack
    phone:absolute
    phone:w-screen
    phone:h-screen
    phone:z-10
    phone:bg-opacity-90
`