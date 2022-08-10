import React from 'react';
import { Container } from '../ui'
import FooterWrapper, { Text } from './Footer.styled';

const Footer: React.FC<{}> = () => {
  return (
    <FooterWrapper>
      <Container>
        <Text>Sety.io © {new Date().getFullYear()}</Text>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
