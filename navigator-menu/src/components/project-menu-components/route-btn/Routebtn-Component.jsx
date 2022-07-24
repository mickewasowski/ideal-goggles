import {StyledNavLink, Image} from './Routebtn.styles';

function RouteBtn(props){

    return(
        <StyledNavLink to={props.path}>
            <Image src={props.imageSource}/>
            {props.children}
        </StyledNavLink>
    )
}

export default RouteBtn;