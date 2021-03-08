import { useState } from 'react'
import Head from 'next/head'
import Progress from '../components/Progress'
import Main from '../components/Main'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 700px 1fr;
`;

const Button = styled.button`
  width: 50px;
  border: 1px solid wheat;
  color: wheat;
  border-radius: 5px;
  background: none;
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
      <div>a gentle introduction to git</div>
      <progress value='.2' max='1.0'></progress>
      <Container>
        <Main step={currentStep}></Main>
        <Progress step={currentStep}/>
        <Button onClick={handleClickBack}>Back</Button>
        <Button onClick={handleClickNext}>Next</Button>
      </Container>
    </>
  )
}

export default Home
