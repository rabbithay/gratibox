import React from 'react';
import * as S from './style';

const Button = ({ text }) => {
  return (
    <S.Button type="submit">
      {text}
    </S.Button>
  );
};

export default Button;
