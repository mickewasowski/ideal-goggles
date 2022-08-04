import { GithubContext } from '../../../contexts/github/GithubContext';

import {Wrapper, SearchBarContents,InputFieldAndErrorContainer, InputWrapper,SearchIcon,InputField,ErrorMsg,ButtonSearch} from './SearchBar.styles';

import {useState, useContext} from 'react';

function SearchBar(){
    const {loadFetchedData, resetToDefault} = useContext(GithubContext);
    const [username,setUsername] = useState('');

    const handleSearch = () => {
        let error = document.getElementById('error');
        error.style.display = 'none';

        fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }else{
                    throw new Error('error')
                }
            })
            .then(res => {
                var options = { year: 'numeric', month: 'long', day: 'numeric' };
                var created  = new Date(res.created_at);
                var result = created.toLocaleDateString('en-US', options);

                loadFetchedData({
                    avatar: res.avatar_url,
                    name: res.name,
                    login: res.login,
                    createdAt: result,
                    bio: res.bio,
                    repos: res.public_repos,
                    followers: res.followers,
                    following: res.following,
                    location: res.location,
                    twitterUsername: res.twitter_username,
                    blog: res.blog,
                    company: res.company
                });
            })
            .catch(err => {
                console.log(err.message);
                error.style.display = 'inline';

                resetToDefault();
            })
    }

    return(
        <Wrapper>
            <SearchBarContents>
                <InputFieldAndErrorContainer>
                    <InputWrapper>
                        <SearchIcon>
                            <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                                fill="#0079ff" />
                            </svg>
                        </SearchIcon>
                        <InputField 
                            style={{backgroundColor: 'transparent'}} 
                            placeholder="Search GitHub username..." 
                            onChange={(e) => {setUsername(e.target.value)}}    
                            />
                    </InputWrapper>
                    <ErrorMsg id='error' style={{display: 'none'}}>No results</ErrorMsg>
                </InputFieldAndErrorContainer>
                <ButtonSearch id="search-btn" onClick={handleSearch}>Search</ButtonSearch>
            </SearchBarContents>
        </Wrapper>
    )
}

export default SearchBar;