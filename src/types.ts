import type { GlobalEvent } from '@inertiajs/core';

export interface DevtoolsPanelProps {
  theme: 'light' | 'dark';
}

export type DevtoolsEventMap = {
  navigate: GlobalEvent<'navigate'>;
};
