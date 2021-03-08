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
  const fill5 = step >= 4 ? 'wheat' : 'black' 
  const fill6 = step >= 5 ? 'wheat' : 'black' 
  const fill7 = step >= 6 ? 'wheat' : 'black' 
  const fill8 = step >= 7 ? 'wheat' : 'black' 
  const fill9 = step >= 8 ? 'wheat' : 'black' 
  const fill10 = step >= 9 ? 'wheat' : 'black' 
  const fill11 = step >= 10 ? 'wheat' : 'black' 

  return (
    <StyledDiv>
      <svg viewBox="0 0 30 500" strokeWidth=".5" stroke='wheat'>
        <line x1='2' x2='2' y1='2' y2='100'>
        </line>
        <circle cx='2' r={radius} cy='2' fill={fill1} />
        <circle cx='2' r={radius} cy='10' fill={fill2} />
        <circle cx='2' r={radius} cy='20' fill={fill3} />
        <circle cx='2' r={radius} cy='30' fill={fill4} />
        <circle cx='2' r={radius} cy='40' fill={fill5} />
        <circle cx='2' r={radius} cy='50' fill={fill6} />
        <circle cx='2' r={radius} cy='60' fill={fill7} />
        <circle cx='2' r={radius} cy='70' fill={fill8} />
        <circle cx='2' r={radius} cy='80' fill={fill9} />
        <circle cx='2' r={radius} cy='90' fill={fill10} />
        <circle cx='2' r={radius} cy='100' fill={fill11} />
        </svg>
    </StyledDiv>
  )
}

export default Progress
