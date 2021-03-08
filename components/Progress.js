import styled from 'styled-components'

const StyledDiv = styled.div`
  border: 2px dashed wheat;
  height: 400px;
  width: 120px;
  border-radius: 15px;
  padding: 20px;
  margin-left: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LabelDiv = styled.div`
  font-size: 12px;
`;

const TextDiv = styled.div`
  padding-bottom: 21px;
`;

const radius = '3'
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
      <div>
        <svg viewBox="0 0 30 500" strokeWidth=".5" stroke='wheat'>
          <line x1='3' x2='3' y1='3' y2='200'>
          </line>
          <circle cx='3' r={radius} cy='3' fill={fill1} />
          <circle cx='3' r={radius} cy='23' fill={fill2} />
          <circle cx='3' r={radius} cy='43' fill={fill3} />
          <circle cx='3' r={radius} cy='63' fill={fill4} />
          <circle cx='3' r={radius} cy='83' fill={fill5} />
          <circle cx='3' r={radius} cy='103' fill={fill6} />
          <circle cx='3' r={radius} cy='123' fill={fill7} />
          <circle cx='3' r={radius} cy='143' fill={fill8} />
          <circle cx='3' r={radius} cy='163' fill={fill9} />
          <circle cx='3' r={radius} cy='183' fill={fill10} />
          <circle cx='3' r={radius} cy='203' fill={fill11} />
        </svg>
      </div>
      <LabelDiv>
        <TextDiv>Introduction</TextDiv>
        <TextDiv>New Repo</TextDiv>
        <TextDiv>Add a File</TextDiv>
        <TextDiv>Commit</TextDiv>
        <TextDiv>New Branch</TextDiv>
        <TextDiv>Edit Branch</TextDiv>
        <TextDiv>History</TextDiv>
        <TextDiv>Time to Merge</TextDiv>
        <TextDiv>Cloning</TextDiv>
        <TextDiv>Pulling</TextDiv>
        <TextDiv>Complete</TextDiv>
      </LabelDiv>
    </StyledDiv>
  )
}

export default Progress
