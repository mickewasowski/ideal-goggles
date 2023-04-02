import { Wrapper, Parag, Strong, H1 } from './Amount.styles';
import PropTypes from 'prop-types';

function Amount({ name, amount }) {
  return (
    <Wrapper>
      <Parag>
        <Strong>{name}</Strong>
        <br />/ person
      </Parag>
      {isNaN(amount) ? (
        <H1 id="tip-amount-person">$ {'0.00'}</H1>
      ) : (
        <H1 id="tip-amount-person">$ {amount}</H1>
      )}
    </Wrapper>
  );
}

Amount.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
};

export default Amount;
