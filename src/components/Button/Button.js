import { ButtonContainer } from "./style"

export default function Button( { label, onClick } ) {

  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  )
}
