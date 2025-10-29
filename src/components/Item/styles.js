import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 97%;
  background-color: #2D3139FF;
  padding: 18px 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 32px;
    color: #FAFAFA;
  }
  
  p {
    font-size: 16px;
    color: #FAFAFA60;
    margin-top: 8px;
    margin-bottom: 12px;
  }
  
  a {
    margin: 2px 0;
    text-decoration: none;
  }
  
  a.repo-details {
    color: #0076ff;
  }

  a.repo-remove {
    color: #ff5440;
  }
`