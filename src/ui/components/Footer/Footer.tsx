import React from 'react';

import useScreenWidth from '../utils/useScreenWidth';

import FooterWrapper from './Footer.styles';

export const Footer: React.FC = () => {
  const widthScreen = useScreenWidth();

  return (
    <FooterWrapper>
      <p>Screen width {widthScreen}px</p>
    </FooterWrapper>
  );
};

export default Footer;
