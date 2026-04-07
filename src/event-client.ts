import { EventClient } from '@tanstack/devtools-event-client';

import type { DevtoolsEventMap } from './types';

class DevtoolsEventClient extends EventClient<DevtoolsEventMap> {
  constructor() {
    super({
      pluginId: 'inertia-devtools'
    });
  }
}

export const eventClient = new DevtoolsEventClient();
