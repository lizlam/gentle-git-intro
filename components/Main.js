import styled from 'styled-components'
import Intro from './mdx/git/Intro.mdx'
import CreateNewRepo from './mdx/git/CreateNewRepo.mdx'
import AddFile from './mdx/git/AddFile.mdx'
import TimeToCommit from './mdx/git/TimeToCommit.mdx'
import CreateNewBranch from './mdx/git/CreateNewBranch.mdx'
import EditBranch from './mdx/git/EditBranch.mdx'
import LookAtHistory from './mdx/git/LookAtHistory.mdx'
import TimeToMerge from './mdx/git/TimeToMerge.mdx'
import Cloning from './mdx/git/Cloning.mdx'
import Pulling from './mdx/git/Pulling.mdx'
import Complete from './mdx/git/Complete.mdx'

const StyledDiv = styled.div`
  border: 2px dashed red;
  height: 700px;
  width: 800px;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  overflow: auto;

  code {
    font-size: 16px;
    color: lightgreen;
  }
`;

function Main ({ step }) {
  return (
    <StyledDiv>
      {step === 0 && (
        <Intro />
      )}
      {step === 1 && (
        <CreateNewRepo />
      )}
      {step === 2 && (
        <AddFile />
      )}
      {step === 3 && (
        <TimeToCommit />
      )}
      {step === 4 && (
        <CreateNewBranch />
      )}
      {step === 5 && (
        <EditBranch />
      )}
      {step === 6 && (
        <LookAtHistory />
      )}
      {step === 7 && (
        <TimeToMerge />
      )}
      {step === 8 && (
        <Cloning />
      )}
      {step === 9 && (
        <Pulling />
      )}
      {step === 10 && (
        <Complete />
      )}
        
    </StyledDiv>
  )
}

export default Main
