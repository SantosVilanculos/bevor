import { type TanStackDevtoolsPluginProps } from '@tanstack/devtools';

declare function Inertia3DevtoolsPanel(
  props: TanStackDevtoolsPluginProps
): import('react/jsx-runtime').JSX.Element;

interface Inertia3DevtoolsPanelProps extends TanStackDevtoolsPluginProps {}

declare const inertia3DevtoolsPlugin: () => {
  render: (
    _el: HTMLElement,
    props: TanStackDevtoolsPluginProps
  ) => import('react/jsx-runtime').JSX.Element;
  name: string;
  id?: string;
  defaultOpen?: boolean;
};

export { Inertia3DevtoolsPanel, inertia3DevtoolsPlugin, type Inertia3DevtoolsPanelProps };
