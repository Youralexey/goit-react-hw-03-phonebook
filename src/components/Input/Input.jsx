import PropTypes from "prop-types";
import { CurrentInput, CurrentLabel } from "./Input.styled";

export default function Input({
  type,
  name,
  value,
  pattern = null,
  title = null,
  onChange,
}) {
  return (
    <CurrentLabel>
      {name}
      <CurrentInput
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        onChange={onChange}
      />
    </CurrentLabel>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
