import { useState } from 'react'
import Head from 'next/head'
import Progress from '../components/Progress'
import Main from '../components/Main'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 700px 1fr;
`;

function Home () {
  const [currentStep, setCurrentStep] = useState(0)

  const handleClickNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleClickBack = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <>
      <Head>
        <title>a gentle intro</title>
      </Head>
      <div>a gentle introduction to git</div>
      <progress value='.2' max='1.0'></progress>
      <Container>
        <Main></Main>
        <Progress step={currentStep}/>
        <button onClick={handleClickNext}>Next</button>
        <button onClick={handleClickBack}>Back</button>
        {currentStep}
      </Container>
    </>
  )
}

export default Home
