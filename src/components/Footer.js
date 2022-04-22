import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
text-align: center;
margin-top: 4rem;
background: #eaecf2;
padding: 1rem 0
`;

function Footer() {
  return (
    <Wrapper>
      <p> Copyright &copy; {new Date().getFullYear()} </p>
    </Wrapper>
  )
}

export default Footer