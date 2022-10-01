import { Outlet } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import { NavigationWrapper, StyledNavLink } from './Main-header.styles';

function MainHeader() {
  let path = window.location.pathname;
  let pathArrayName = path.split('/').filter((x) => x);
  let currentProject = pathArrayName.join(' ').toUpperCase();

  return (
    <>
      <NavigationWrapper>
        <StyledNavLink to={'/'}>
          <MdArrowBackIosNew className="mr-[.5rem]" />
          Back
        </StyledNavLink>
        <h1 className="">{currentProject}</h1>
      </NavigationWrapper>
      <Outlet />
    </>
  );
}

export default MainHeader;
