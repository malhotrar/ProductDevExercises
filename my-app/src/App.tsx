import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from "./Counter";
import { Todo } from './Todo';
import { Calculator } from './Calculator';

export const App : React.FunctionComponent = () => {
  return <>
    <Counter />
    <Todo />
    <Calculator />
  </>
};
