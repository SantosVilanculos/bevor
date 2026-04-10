// import _ from './index.css?inline';
import { constructCoreClass, type ClassType } from '@tanstack/devtools-utils/solid';

const [A, B] = constructCoreClass(() => import('./component'));

export const Component: ClassType = process.env.NODE_ENV !== 'development' ? B : A;
