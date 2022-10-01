import { createContext, useState } from 'react';
import profilePic from '../../assets/github/octocat.png';
import PropTypes from 'prop-types';

export const GithubContext = createContext();

const initialState = {
  avatar: `${profilePic}`,
  name: 'The Octocat',
  login: 'octocat',
  createdAt: '25 Jan 2011',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  repos: 8,
  followers: 3938,
  following: 9,
  location: 'San Francisco',
  twitterUsername: null,
  blog: 'https://github.blog',
  company: '@github',
};

export const GithubInfoProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  const loadFetchedData = (info) => {
    setData({
      ...info,
    });
  };

  const resetToDefault = () => setData(initialState);

  return (
    <GithubContext.Provider value={{ data, loadFetchedData, resetToDefault }}>
      {children}
    </GithubContext.Provider>
  );
};

GithubInfoProvider.propTypes = {
  children: PropTypes.string,
};
