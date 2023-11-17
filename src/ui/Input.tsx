import styled from "styled-components";

type InputProps = {
  type: "email" | "password" | "text";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  value?: string;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={props.className}
      value={props.value}
      required
    />
  );
};

const StyledInput = styled.input`
  width: 360px;
  height: 40px;
  padding: 8px 15px;
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
`;

export default Input;