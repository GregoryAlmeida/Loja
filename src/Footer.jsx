import React from 'react';
import styled from 'styled-components';

const Footers = styled.footer`
  background-color: #eeeeee;
  text-align: center;
`;

export default function Footer() {
  return (
    <Footers>
      <p>MKS sistemas © Todos os direitos reservados</p>
    </Footers>
  );
}
