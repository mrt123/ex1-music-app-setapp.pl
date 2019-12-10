import React from 'react'
import styled, {keyframes} from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  display: flex;
  animation: ${rotate360} cubic-bezier(0, 0.2, 0.8, 1) infinite;
	animation-duration: ${p=>p.cycleTime};
`;

// hint: provide fixed height & width for children in order to avoid parent stretching during rotation.
export default ({children, cycleTime = '1s'}) => {
  return (
    <Spinner cycleTime={cycleTime}>{children}</Spinner>
  )
}