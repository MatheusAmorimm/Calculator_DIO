import { ButtonContainerFunction } from "./style"

export default function ButtonFunction( { label, onClick } ) {

  return (
    <ButtonContainerFunction onClick={onClick} type="button">
      {label}
    </ButtonContainerFunction>
  )
}