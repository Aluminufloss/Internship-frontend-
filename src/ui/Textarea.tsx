import styled from "styled-components";

type TextareaProps = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  className?: string;
  value?: string;
};

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <StyledTextarea
      placeholder={props.placeholder}
      value={props.value}
      className={props.className}
      onChange={props.onChange}
      maxLength={1000}
      required
    />
  );
};

const StyledTextarea = styled.textarea`
  width: 360px;
  height: 400px;
  padding: 8px 15px;
  color: #000;
  border: 1px solid #b9b9b9;
  border-radius: 0.8rem;
  background-color: #fff;
`;

export default Textarea;
