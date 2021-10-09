import Props from 'prop-types';

const Button = ({ children, onButtonClick, disabled = false}) => {
  return (
    <>
      <button type="button" disabled={disabled} onClick={onButtonClick} style={{ fontSize: '50px' }}>
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  children: Props.node.isRequired,
  onButtonClick: Props.node.isRequired,
  disabled: Props.bool,
};

export default Button;
