import React from 'react'
import { ItemContainer } from "./styles";

export default function Item({ repository }) {

  return (
    <ItemContainer>
      <h3>{repository.full_name}</h3>
      <p>{repository.description}</p>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer" className="repo-details">Details</a>
      <a href="#" className="repo-remove">Remove</a>
    </ItemContainer>
  )
}
