import styled from 'styled-components';

export const Card = styled.section`
  position: relative;

  border-radius: 4px;
  height: 300px;
  overflow: hidden;
  color: black;
  font-weight: 700;
`;

export const Container = styled.div`
  padding: 15px;
  position: relative;
  height: 100%;
  box-sizing: border-box;
`;

export const Thumb = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Likes = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
`;
