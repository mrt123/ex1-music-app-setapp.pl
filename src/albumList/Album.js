import React from 'react';
import styled from 'styled-components';

const Album = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const CoverImg = styled.img`
  width: 55px;
  max-height: 77px;
  border-radius: 6px;
  border: .5px solid rgba(0,0,0,.1);
`;

const Header = styled.div`
  margin-left: 20px;
`;

const Title = styled.div`
  font-size: 1em;
  font-weight: 400;
  font-family: "SF Pro Display","SF Pro Icons","Apple WebExp Icons Custom","Helvetica Neue",Helvetica,Arial,sans-serif;
`;

const Artist = styled.div`
  font-size: 18px;
  line-height: 1.2223;
  font-weight: 400;
  letter-spacing: .027em;
  font-family: "SF Pro Display","SF Pro Icons","Apple WebExp Icons Custom","Helvetica Neue",Helvetica,Arial,sans-serif;
  color: #8e8e93;
`;

export default ({ data }) => {
  const title = data['im:name'].label;
  const artist = data['im:artist'].label;
  const image50PxUrl = data['im:image'][0].label;

  return (
    <Album>
      <CoverImg src={image50PxUrl}/>
      <Header>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </Header>
    </Album>
  );
};




