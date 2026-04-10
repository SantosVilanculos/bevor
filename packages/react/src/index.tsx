// import _ from './index.css?inline';
import { Component as _Component } from '@component/core';
import { createReactPanel, createReactPlugin } from '@tanstack/devtools-utils/react';

const [A, B] = createReactPanel(_Component);

export const Component = process.env.NODE_ENV !== 'development' ? B : A;

const [C, D] = createReactPlugin({
  name: 'Component',
  Component: A
});

export const component = process.env.NODE_ENV !== 'development' ? D : C;
