import React from 'react';

import { Footer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { FooterText, FooterLink } from './footer.styles';

const FooterComponent = () => {
  const date = new Date()
  const year = date.getFullYear();
  return (
    <Footer style={{ padding: '20px' }}>
      <FooterText>
        <FooterLink href='https://muriuki.dev'>Collins Muriuki</FooterLink> &copy; {year}</FooterText>
    </Footer>
  )
};

export default FooterComponent;