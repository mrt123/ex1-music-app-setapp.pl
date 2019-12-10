import React from 'react';
import styled from 'styled-components';
import Album from './Album.js';

const List = styled.div`
  margin: 20px;
`;

export default ({ data }) => {

  const albums = data.map((album, i) => {
    return <Album key={i} data={album}/>
  });

  return (
    <List>
      {albums}
    </List>
  );
};




