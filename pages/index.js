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
  grid-template-columns: 800px 1fr;
`;

const ButtonDiv = styled.div`
  margin-left: 75px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="60"
              height="60"
              viewBox="0 0 28.42 56.03" >
                <path 
                  d="M.94 17.18C.7 16 .45 15 .32 14.06a13.54 13.54 0 01-.13-2.77c0-.18.72-.48 1.08-.46s1 .4 1 .62c0 1.62-.17 3.25-.28 4.88a2.93 2.93 0 01-.06.84c0 .12-.41.22-.62.2a.64.64 0 01-.37-.19zm.6 4.48c.72.21.68.7.72 1.12a15.19 15.19 0 01-.12 2.69 9.7 9.7 0 00-.25 1.83c0 .44-.19.67-.82.81C1 28.13.79 28 .78 28c-.28-1.46-.23-2.8-.5-4.25-.06-.29-.16-.57-.25-.86-.17-.57.49-1.22 1.51-1.23zM.82 5.42C.67 4.57.57 3.16.46 2.57A8.74 8.74 0 01.19.83C.2.55.55.23.85 0c.09-.06.49.13.74.21 1.09.33.7 1.05.71 1.68S2 4.32 2 5s-.17.87-1.07.59c-.12-.06-.17-.26-.11-.17zm5.29 42.7a9.36 9.36 0 01-2.89-1.63 4.65 4.65 0 01-.81-.85 5.78 5.78 0 01-.67-1 3.94 3.94 0 01-.26-.55c-.08-.19.42-.81.75-.95s1.07-.14 1.14 0 .12.23.18.35a10.77 10.77 0 002.53 3.25 3.47 3.47 0 01.62.5c.06.09-.07.44-.21.61a.72.72 0 01-.38.27zm4.39 1.16a1 1 0 011.21-.46c.8.09 1.66.33 2.51.5a7.83 7.83 0 001.76.39c.44 0 .65.21.77.84a.38.38 0 01-.13.29 31.42 31.42 0 01-4.35.1c-.3 0-.62.06-.94.08-.66.04-1.17-.76-.83-1.74zM.71 37.94c-.21-.87-.33-2.28-.43-2.88A8.09 8.09 0 010 33.32c0-.28.37-.6.66-.82.09-.06.49.13.75.21 1.08.33.69 1 .7 1.68s-.33 2.41-.25 3-.12.85-1 .66c-.16.01-.22-.19-.15-.11zm27.71 12.13c-.07-1.47-9.13-5.62-9.71-5s-.29 10.14.55 10.9c.51.49 9.23-4.59 9.16-5.9z" 
                  fill="currentColor"
                  transform="scale(-1, 1) translate(-40, 0)"
                />
             </svg>  
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="60"
              height="60"
              viewBox="0 0 28.42 56.03" >
                <path 
                  d="M.94 17.18C.7 16 .45 15 .32 14.06a13.54 13.54 0 01-.13-2.77c0-.18.72-.48 1.08-.46s1 .4 1 .62c0 1.62-.17 3.25-.28 4.88a2.93 2.93 0 01-.06.84c0 .12-.41.22-.62.2a.64.64 0 01-.37-.19zm.6 4.48c.72.21.68.7.72 1.12a15.19 15.19 0 01-.12 2.69 9.7 9.7 0 00-.25 1.83c0 .44-.19.67-.82.81C1 28.13.79 28 .78 28c-.28-1.46-.23-2.8-.5-4.25-.06-.29-.16-.57-.25-.86-.17-.57.49-1.22 1.51-1.23zM.82 5.42C.67 4.57.57 3.16.46 2.57A8.74 8.74 0 01.19.83C.2.55.55.23.85 0c.09-.06.49.13.74.21 1.09.33.7 1.05.71 1.68S2 4.32 2 5s-.17.87-1.07.59c-.12-.06-.17-.26-.11-.17zm5.29 42.7a9.36 9.36 0 01-2.89-1.63 4.65 4.65 0 01-.81-.85 5.78 5.78 0 01-.67-1 3.94 3.94 0 01-.26-.55c-.08-.19.42-.81.75-.95s1.07-.14 1.14 0 .12.23.18.35a10.77 10.77 0 002.53 3.25 3.47 3.47 0 01.62.5c.06.09-.07.44-.21.61a.72.72 0 01-.38.27zm4.39 1.16a1 1 0 011.21-.46c.8.09 1.66.33 2.51.5a7.83 7.83 0 001.76.39c.44 0 .65.21.77.84a.38.38 0 01-.13.29 31.42 31.42 0 01-4.35.1c-.3 0-.62.06-.94.08-.66.04-1.17-.76-.83-1.74zM.71 37.94c-.21-.87-.33-2.28-.43-2.88A8.09 8.09 0 010 33.32c0-.28.37-.6.66-.82.09-.06.49.13.75.21 1.08.33.69 1 .7 1.68s-.33 2.41-.25 3-.12.85-1 .66c-.16.01-.22-.19-.15-.11zm27.71 12.13c-.07-1.47-9.13-5.62-9.71-5s-.29 10.14.55 10.9c.51.49 9.23-4.59 9.16-5.9z" 
                  fill="currentColor"
                  transform="translate(0)"
                />
             </svg>
              <Button onClick={handleClickBack}>Back</Button>
              <Button onClick={handleClickNext}>Next</Button>
            </ButtonDiv>
        </div>
      </Container>
    </>
  )
}

export default Home
