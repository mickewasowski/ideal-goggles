import Left from "./left-section/Left";
import Right from "./right-section/Right";

import {UserDetailsContainer} from './UserDetails.styles';

function UserDetails(){

    return(
        <UserDetailsContainer>
            <Left />
            <Right />
        </UserDetailsContainer>
    )
}

export default UserDetails;