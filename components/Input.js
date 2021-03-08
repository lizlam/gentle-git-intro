import { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 10px;
  background: none;
  border-radius: 10px;
  border: 2px dashed gray;
  width: 400px;
  color: wheat;
  font-size:16px;
`;

const Button = styled.button`
  color: wheat;
  background: none;
  margin: 20px;
  padding: 10px;
`;

function Input() {
  const [complete, setComplete] = useState(false);  
  
  const handleClick = () => {
    setComplete(true);
  }

  const handleChange = (e) => {
    console.log(e);
  }

  return (
    <>
      {complete && (
        <div>DONE!</div>
      )}
      <StyledInput onChange={handleChange} /><Button onClick={handleClick}>Enter</Button>
    </>
  )
}

export default Input