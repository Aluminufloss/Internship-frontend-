import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 2.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

function FormRowVertical({ label, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
    </StyledFormRow>
  )
}

export default FormRowVertical;
