import { useState } from 'react'
import Head from 'next/head'
import Progress from '../components/Progress'
import Main from '../components/Main'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 700px 1fr;
`;

const ButtonDiv = styled.div`
  margin-left: 75px;
`;

const Button = styled.button`
  width: 50px;
  border: 1px solid wheat;
  color: wheat;
  border-radius: 5px;
  background: none;
  margin: 16px;
  padding-left: 10x;
  padding-right: 10px;
`;

function Home () {
  const max = 10;
  const min = 0;
  const [currentStep, setCurrentStep] = useState(0)

  const handleClickNext = () => {
    currentStep < max && setCurrentStep(currentStep + 1)
  }

  const handleClickBack = () => {
    currentStep > min && setCurrentStep(currentStep - 1)
  }

  return (
    <>
      <Head>
        <title>a gentle intro</title>
      </Head>
      <StyledDiv>
        a gentle introduction to git
        <div>
          <progress value='.37' max='1.0'></progress>
        </div>
      </StyledDiv>
      <Container>
        <Main step={currentStep}></Main>
        <div>
          <Progress step={currentStep}/>
            <ButtonDiv>
              <Button onClick={handleClickBack}>Back</Button>
              <Button onClick={handleClickNext}>Next</Button>
            </ButtonDiv>
        </div>
      </Container>
    </>
  )
}

export default Home
