import {NavLink} from 'react-router-dom';


function RouteBtn(props){

    return(
        <NavLink className={props.navlinkStyling} to={props.path}>
            <img className={props.imageStyling} src={props.imageSource}/>
            {props.children}
        </NavLink>
    )
}

export default RouteBtn;