import './ErrorMessage.scss';
import React from 'react';

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = (props) => {
  const { message } = props;
  return (
    <p className="error-message">{message}</p>
  );
};

export default ErrorMessage;
