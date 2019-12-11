import React from "react";
import styled from 'styled-components';
import Spinner from '../common/GeneralSpinner'
import reactLogo from "./logo.svg";

const ListLoader = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
`;

const SpinnedImage = styled.img`
  width: 50px;
  height: 50px;
`;


export default () => {
  return (
    <ListLoader>
      <div>
        <Spinner cycleTime="0.5s">
          <SpinnedImage src={reactLogo}/>
        </Spinner>
      </div>
      ...loading
    </ListLoader>
  )
}