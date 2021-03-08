import { useState } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  grid-gap: 25px;
`;

const CheckDiv = styled.div`
  margin-top: 13px;
  margin-left: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  background: none;
  border-radius: 10px;
  border: 2px dashed gray;
  width: 400px;
  height: 30px;
  color: wheat;
  font-size: 16px;
`;

const Button = styled.button`
  color: wheat;
  background: none;
  padding: 4px;
  border-radius: 10px;
  font-size: 16px;
`;

function Input({ answer }) {
  const [complete, setComplete] = useState(false)
  const [input, setInput] = useState("")  
  
  const handleClick = () => {
    if (answer === input) {
      setComplete(true)
    } else {
      setComplete(false)
    }
  }

  const handleChange = (e) => {
    console.log(e);
    setInput(e.target.value);
  }

  return (
    <InputContainer>
    <div>
      {complete && (
        <CheckDiv>✓</CheckDiv>
      )}
      </div>
      <StyledInput onChange={handleChange} />
      <Button onClick={handleClick}>Enter</Button>
    </InputContainer>
  )
}

export default Input