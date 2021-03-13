import { useState } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  grid-gap: 25px;
  border-top: 2px dashed red;
  margin-top: 25px;
  padding-top: 50px;
  padding-bottom: 50px;

  input, label {
    display: block;
  }
`;

const CheckDiv = styled.div`
  margin-top: 50px;
  margin-left: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  background: none;
  border-radius: 10px;
  border: 2px dashed gray;
  width: 455px;
  height: 30px;
  color: wheat;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  padding-bottom: 12px;
`;

const Button = styled.button`
  color: wheat;
  background: none;
  border-radius: 10px;
  border: 2px dashed gray;
  font-size: 16px;
  width: 100px;
  height: 53px;
  margin-top: 36px;
  &:hover {
    border: 2px solid gray;
  }
`;

function Input({ question, answer }) {
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
      <div>
        <StyledLabel>{question}</StyledLabel>
        <StyledInput onChange={handleChange} />
      </div>
      <Button onClick={handleClick}>Enter</Button>
    </InputContainer>
  )
}

export default Input