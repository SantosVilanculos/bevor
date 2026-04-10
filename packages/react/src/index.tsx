import { Component as _Component } from '@santosvilanculos/bevor-core';
import { createReactPanel, createReactPlugin } from '@tanstack/devtools-utils/react';

const [A, B] = createReactPanel(_Component);

export const Inertia3DevtoolsPanel = process.env.NODE_ENV !== 'development' ? B : A;

const [C, D] = createReactPlugin({
  name: 'Inertia 3',
  Component: A
});

export const inertia3DevtoolsPlugin = process.env.NODE_ENV !== 'development' ? D : C;
