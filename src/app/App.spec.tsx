import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Test Suite', () => {
  it('should render', () => {
    render(<App />);

    expect(true).toBeTruthy();
  });
});
