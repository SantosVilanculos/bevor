import { constructCoreClass, type ClassType } from '@tanstack/devtools-utils/solid';

const [_Component, _NoOpComponent] = constructCoreClass(() => import('./component'));

export const Component: ClassType =
  process.env.NODE_ENV !== 'development' ? _NoOpComponent : _Component;
