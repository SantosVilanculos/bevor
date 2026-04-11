import { Component } from '@santosvilanculos/bevor-core';
import { createReactPanel, createReactPlugin } from '@tanstack/devtools-utils/react';

const [Panel, NoOpPanel] = createReactPanel(Component);

export const Inertia3DevtoolsPanel = process.env.NODE_ENV !== 'development' ? NoOpPanel : Panel;

const [Plugin, NoOpPlugin] = createReactPlugin({
  name: 'Inertia 3',
  Component: Panel
});

export const inertia3DevtoolsPlugin = process.env.NODE_ENV !== 'development' ? NoOpPlugin : Plugin;
