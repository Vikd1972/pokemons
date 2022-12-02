/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react';

import HeaderWrapper from './Header.styles';

export const Header: React.FC = () => {
  const locale = 'ru';
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const date = useMemo(() => {
    return today.toLocaleDateString(locale);
  }, [
    today.getDate(),
  ]);

  const time = useMemo(() => {
    return today.toLocaleTimeString(locale);
  }, [
    today,
  ]);

  return (
    <HeaderWrapper>
      <p>It is now {date},</p>
      <p>{time}</p>
    </HeaderWrapper>
  );
};

export default Header;
