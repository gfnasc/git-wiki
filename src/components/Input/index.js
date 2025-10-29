import React from 'react'
import { InputContainer } from "./styles";
import Button from "../Button";

export default function Input() {
  return (
    <InputContainer>
      <input type="text" placeholder="Enter the repository name"/>
      <Button />
    </InputContainer>
  )
}
