# @santosvilanculos/lorem

[![npm version](https://img.shields.io/npm/v/@santosvilanculos/lorem.svg)](https://www.npmjs.com/package/@santosvilanculos/lorem)
[![npm license](https://img.shields.io/npm/l/@santosvilanculos/lorem.svg)](https://www.npmjs.com/package/@santosvilanculos/lorem)

Inertia 3 devtools built on top of TanStack DevTools. Uses TanStack DevTools as a harness to display Inertia-specific debugging information.

## Table of Contents

- [Installation](#installation)
- [Peer Dependencies](#peer-dependencies)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [API](#api)

## Installation

```sh
pnpm add @santosvilanculos/lorem
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
import { inertiaDevtoolsPlugin } from '@santosvilanculos/lorem';

function App() {
  return (
    <TanStackDevtools
      plugins={[
        inertiaDevtoolsPlugin()
      ]}
    />
  );
}
```

## Usage

### Using the Plugin

The `inertiaDevtoolsPlugin` registers an Inertia panel within TanStack DevTools.

```tsx
import { TanStackDevtools } from '@tanstack/react-devtools';
import { inertiaDevtoolsPlugin } from '@santosvilanculos/lorem';

function App() {
  return (
    <TanStackDevtools
      plugins={[
        inertiaDevtoolsPlugin()
      ]}
    />
  );
}
```

### Using the Panel Directly

For custom configurations, you can import and render the `InertiaDevtoolsPanel` component directly.

```tsx
import { TanStackDevtools } from '@tanstack/react-devtools';
import { InertiaDevtoolsPanel } from '@santosvilanculos/lorem';

function App() {
  return (
    <TanStackDevtools
      plugins={[
        {
          name: 'Inertia',
          render: (_, { theme }) => <InertiaDevtoolsPanel theme={theme} />
        }
      ]}
    />
  );
}
```

## API

### `inertiaDevtoolsPlugin()`

Creates a plugin for TanStack DevTools that displays Inertia debugging information.

```tsx
import { inertiaDevtoolsPlugin } from '@santosvilanculos/lorem';

<TanStackDevtools plugins={[inertiaDevtoolsPlugin()]} />
```

### `InertiaDevtoolsPanel`

A React component that renders the Inertia devtools panel. Accepts a `theme` prop from TanStack DevTools.

```tsx
import { InertiaDevtoolsPanel } from '@santosvilanculos/lorem';

<InertiaDevtoolsPanel theme="light" />
```

### `InertiaDevtoolsPanelProps`

Type for the props accepted by `InertiaDevtoolsPanel`.

```tsx
import type { InertiaDevtoolsPanelProps } from '@santosvilanculos/lorem';
```
