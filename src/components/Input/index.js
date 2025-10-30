import React from 'react'
import { InputContainer } from "./styles";
import Button from "../Button";

export default function Input(props) {
  return (
    <InputContainer>
      <input value={props.value} onChange={props.onChange} type="text" placeholder="Enter the repository name"/>
      <Button onClick={props.handleSearchRepo} />
    </InputContainer>
  )
}
