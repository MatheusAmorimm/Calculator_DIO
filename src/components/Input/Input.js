import { InputContainer } from "./style";

export default function Input({value}) {
  return (
    <InputContainer>
        <input disabled value={value}></input>
   </InputContainer>
  )
}
