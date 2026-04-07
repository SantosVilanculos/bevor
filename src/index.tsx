import { router, type Page } from '@inertiajs/core';
import { type TanStackDevtoolsPluginProps } from '@tanstack/devtools';
import { createReactPlugin } from '@tanstack/devtools-utils/react';
import { useEffect } from 'react';

import { Component } from './component';
import { eventClient } from './event-client';

import './index.css';
import type { DevtoolsPanelProps } from './types';

function DevtoolsPanel({ theme }: DevtoolsPanelProps) {
  const element = document.querySelector('[data-page="app"][type="application/json"]');

  const initialPage: Page | null = element ? JSON.parse(element.innerHTML) : null;

  useEffect(() => {
    const navigate = router.on('navigate', e => eventClient.emit('navigate', e));

    return () => {
      navigate();
    };
  }, []);

  return (
    <div className="h-(--tsd-main-panel-height)">
      <Component initialPage={initialPage} theme={theme} />
    </div>
  );
}

const [Plugin] = createReactPlugin({
  name: 'Inertia',
  id: 'inertia-devtools',
  defaultOpen: false,
  Component: ({ theme }: TanStackDevtoolsPluginProps) => <DevtoolsPanel theme={theme} />
});

// NOTE: inertia* only on export
export {
  DevtoolsPanel as InertiaDevtoolsPanel,
  Plugin as inertiaDevtoolsPlugin,
  type DevtoolsPanelProps
};
