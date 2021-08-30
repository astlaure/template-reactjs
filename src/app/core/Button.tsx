import './Button.scss';
import React from 'react';

interface Props {
  type: 'button' | 'submit';
  label: string;
}

const Button: React.FC<Props> = (props) => {
  const { type, label } = props;
  return (
    <button type={type} className="button">{label}</button>
  );
};

export default Button;
