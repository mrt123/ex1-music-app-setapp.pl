import React from 'react';
import styled from 'styled-components';
import './App.css';
import AlbumListContainer from './albumList/AlbumListContainer.js';

const AppHeading = styled.div`
  margin: 20px 20px 40px 20px;
`;

function App() {
  return (
    <div>
      <header className="App-header">
        <AppHeading>iTunes Top 100 Albums</AppHeading>
        <AlbumListContainer />
      </header>
    </div>
  );
}

export default App;
