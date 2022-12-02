/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import FooterWrapper from './Footer.styles';

export const Footer: React.FC = () => {
  const [widthScreen, setWidthScreen] = useState(0);

  const onChangeWidth = () => {
    setWidthScreen(document.documentElement.clientWidth);
  };

  useEffect(() => {
    onChangeWidth();
    window.addEventListener('resize', onChangeWidth);
    return () => window.removeEventListener('resize', onChangeWidth);
  }, []);

  return (
    <FooterWrapper>
      <p>Screen width {widthScreen}px</p>
    </FooterWrapper>
  );
};

export default Footer;
