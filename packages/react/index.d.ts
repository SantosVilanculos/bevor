import { type TanStackDevtoolsPluginProps } from '@tanstack/devtools';

declare function Component(
  props: TanStackDevtoolsPluginProps
): import('react/jsx-runtime').JSX.Element;

declare const component: () => {
  render: (
    _el: HTMLElement,
    props: TanStackDevtoolsPluginProps
  ) => import('react/jsx-runtime').JSX.Element;
  name: string;
  id?: string;
  defaultOpen?: boolean;
};

export { Component, component };
