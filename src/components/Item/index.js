import React from 'react'
import { ItemContainer } from "./styles";

export default function Item() {
  return (
    <ItemContainer>
      <h3>repo-re</h3>
      <p>Teste de descrição</p>
      <a href="#" className="repo-details">Details</a>
      <a href="#" className="repo-remove">Remove</a>
    </ItemContainer>
  )
}
