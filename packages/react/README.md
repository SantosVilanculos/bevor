# @santosvilanculos/bevor-react

[![npm version](https://img.shields.io/npm/v/@santosvilanculos/bevor-react.svg)](https://www.npmjs.com/package/@santosvilanculos/bevor-react)
[![npm license](https://img.shields.io/npm/l/@santosvilanculos/bevor-react.svg)](https://www.npmjs.com/package/@santosvilanculos/bevor-react)

Inertia 3 devtools built on top of TanStack DevTools. Uses TanStack DevTools as a harness to display Inertia-specific debugging information.

## Table of Contents

- [Installation](#installation)
- [Peer Dependencies](#peer-dependencies)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [API](#api)

## Installation

```sh
pnpm add @santosvilanculos/bevor-react
```

## Peer Dependencies

This package requires the following peer dependencies:

- `@tanstack/react-devtools`
- `@inertiajs/core`
- `@inertiajs/react`
- `react`
- `react-dom`

## Quick Start

```tsx
import { TanStackDevtools } from '@tanstack/react-devtools';
import { inertia3DevtoolsPlugin } from '@santosvilanculos/bevor-react';

function App() {
  return <TanStackDevtools plugins={[inertia3DevtoolsPlugin()]} />;
}
```

## Usage

### Using the Plugin

The `inertia3DevtoolsPlugin` registers an Inertia panel within TanStack DevTools.

```tsx
import { TanStackDevtools } from '@tanstack/react-devtools';
import { inertia3DevtoolsPlugin } from '@santosvilanculos/bevor-react';

function App() {
  return <TanStackDevtools plugins={[inertia3DevtoolsPlugin()]} />;
}
```

### Using the Panel Directly

For custom configurations, you can import and render the `Inertia3DevtoolsPanel` component directly.

```tsx
import { TanStackDevtools } from '@tanstack/react-devtools';
import { Inertia3DevtoolsPanel } from '@santosvilanculos/bevor-react';

function App() {
  return (
    <TanStackDevtools
      plugins={[
        {
          name: 'Inertia 3',
          render: (_, { theme }) => <Inertia3DevtoolsPanel theme={theme} />
        }
      ]}
    />
  );
}
```

## API

### `inertia3DevtoolsPlugin()`

Creates a plugin for TanStack DevTools that displays Inertia debugging information.

```tsx
import { inertia3DevtoolsPlugin } from '@santosvilanculos/bevor-react';

<TanStackDevtools plugins={[inertia3DevtoolsPlugin()]} />;
```

### `Inertia3DevtoolsPanel`

A React component that renders the Inertia devtools panel. Accepts a `theme` prop from TanStack DevTools.

```tsx
import { Inertia3DevtoolsPanel } from '@santosvilanculos/bevor-react';

<Inertia3DevtoolsPanel theme="light" />;
```

### `Inertia3DevtoolsPanelProps`

Type for the props accepted by `Inertia3DevtoolsPanel`.

```tsx
import type { Inertia3DevtoolsPanelProps } from '@santosvilanculos/bevor-react';
```
