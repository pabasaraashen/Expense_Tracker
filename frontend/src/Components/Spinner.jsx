import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Dot = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 4px solid rgba(0,0,0,0.08);
  border-top-color: #222260;
  animation: ${spin} 0.9s linear infinite;
`;

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:8px;
`;

export default function Spinner(){
  return (
    <Wrapper>
      <Dot />
    </Wrapper>
  );
}
