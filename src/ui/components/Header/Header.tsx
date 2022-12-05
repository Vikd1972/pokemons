/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react';

import HeaderWrapper from './Header.styles';

const locale = 'ru';

export const Header: React.FC = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <HeaderWrapper>
      <p>It is now {today.toLocaleDateString(locale)},</p>
      <p>{today.toLocaleTimeString(locale)}</p>
    </HeaderWrapper>
  );
};

export default Header;
