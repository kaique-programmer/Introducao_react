import Props from 'prop-types';

const Button = ({ children, onButtonClick }) => {
  return (
    <>
      <button type="button" onClick={onButtonClick} style={{ fontSize: '50px' }}>
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  children: Props.node.isRequired,
  onButtonClick: Props.node.isRequired,
};

export default Button;
