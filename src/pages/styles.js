import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    
    margin: 30px;
  }
`

export const ListingContainer = styled.div`
  width: 90%;
  margin: 20px 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`