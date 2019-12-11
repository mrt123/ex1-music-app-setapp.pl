import React from 'react';
import styled from 'styled-components';
import './App.css';
import AlbumListContainer from './albumList/AlbumListContainer.js';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${window.innerHeight}px;  // device height - address bar
`;

const AppHeading = styled.div`
  display: flex;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  height: 50px;
  min-height: 50px;
  background: black;
  color: grey;
  font-size: 15px;
  font-weight: 600;
`;

const Scroller = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <AppContainer>
      <AppHeading>iTunes Top 100 Albums</AppHeading>
      <Scroller>
        <AlbumListContainer/>
      </Scroller>
    </AppContainer>
  );
}

export default App;
