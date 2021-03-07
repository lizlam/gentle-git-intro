import styled from 'styled-components'

const StyledDiv = styled.div`
  border: 2px dashed wheat;
  height: 500px;
  width: 100px;
  border-radius: 15px;
  padding: 20px;
  margin-left: 80px
`;

const radius = '1.4'
const fillDone = 'red'

//<text x='3' y='3' stroke='white' strokeWidth='1px' fontSize="8px" dy=".5em">intro</text>

function Progress ( {step} ) {
  const fill1 = step >= 0 ? 'wheat' : 'black'
  const fill2 = step >= 1 ? 'wheat' : 'black' 
  const fill3 = step >= 2 ? 'wheat' : 'black' 
  const fill4 = step >= 3 ? 'wheat' : 'black' 

  return (
    <StyledDiv>
      <svg viewBox="0 0 30 500" strokeWidth=".5" stroke='wheat'>
        <line x1='2' x2='2' y1='2' y2='20'>
        </line>
        <circle
          cx='2'
          r={radius}
          cy='2'
          fill={fill1}
        />
        <circle
          cx='2'
          r={radius}
          cy='10'
          fill={fill2}
          ></circle>
           <circle
          cx='2'
          r={radius}
          cy='20'
          fill={fill3}
          ></circle>
           <circle
          cx='2'
          r={radius}
          cy='30'
          fill={fill4}
          ></circle>
        </svg>
    </StyledDiv>
  )
}

export default Progress
