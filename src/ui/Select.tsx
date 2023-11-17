import styled from "styled-components";

type arrayElement = {
  id: string;
  value: string;
  label: string;
};

type SelectProps = {
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  array: arrayElement[];
  className?: string;
};

const Select: React.FC<SelectProps> = (props) => {
  return (
    <StyledSelect
      value={props.value}
      onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
        props.onChange(ev)
      }
      className={props.className}
    >
      {props.array.map((value, i) => (
        <option key={i} value={value.value}>
          {value.label}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  width: 180px;
  height: 40px;
  padding: 8px 15px;
  text-align: center;
  border-radius: 0.8rem;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }


`;

export default Select;
