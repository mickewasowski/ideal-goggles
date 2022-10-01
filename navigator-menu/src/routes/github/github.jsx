import { GithubInfoProvider } from '../../contexts/github/GithubContext';

import GithubWrapper from '../../components/github-components/GithubWrapper';

function GithubRoute() {
  return (
    <GithubInfoProvider>
      <GithubWrapper />
    </GithubInfoProvider>
  );
}

export default GithubRoute;
