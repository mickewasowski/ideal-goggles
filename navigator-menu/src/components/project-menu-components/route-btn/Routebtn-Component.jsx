import { StyledNavLink, Image } from './Routebtn.styles';
import PropTypes from 'prop-types';

function RouteBtn(props) {
  return (
    <StyledNavLink to={props.path}>
      <Image src={props.imageSource} />
      {props.children}
    </StyledNavLink>
  );
}

RouteBtn.propTypes = {
  path: PropTypes.string,
  imageSource: PropTypes.string,
  children: PropTypes.string,
};

export default RouteBtn;
