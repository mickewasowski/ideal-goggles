import Toggle from "./theme-toggle/ThemeToggle";
import SearchBar from "./search-bar/SearchBar";
import UserDetails from "./user-details/UserDetails";

import {Background, PageContainer} from './GithubWrapper.styles';

function GithubWrapper(){


    return(
        // className="dark"
        <Background>
            <PageContainer>
                <Toggle />
                {/* <SearchBar /> */}
                {/* <UserDetails /> */}
            </PageContainer>
        </Background>
    )
}

export default GithubWrapper;