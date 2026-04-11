import type { TanStackDevtoolsPluginProps } from '@tanstack/devtools';
import type { JSX } from 'react';

declare function Inertia3DevtoolsPanel(
  props: TanStackDevtoolsPluginProps
): JSX.Element;

interface Inertia3DevtoolsPanelProps extends TanStackDevtoolsPluginProps {}

declare const inertia3DevtoolsPlugin: () => {
  render: (
    _el: HTMLElement,
    props: TanStackDevtoolsPluginProps
  ) => JSX.Element;
  name: string;
  id?: string;
  defaultOpen?: boolean;
};

export { Inertia3DevtoolsPanel, inertia3DevtoolsPlugin, type Inertia3DevtoolsPanelProps };
