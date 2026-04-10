// import _ from './index.css?inline';
import { type TanStackDevtoolsPluginProps } from '@tanstack/devtools';
import { Header, HeaderLogo, MainPanel, ThemeContextProvider } from '@tanstack/devtools-ui';

import { SharedData } from './shared-data';

export default function ({}: TanStackDevtoolsPluginProps) {
  return (
    <ThemeContextProvider theme="dark">
      <MainPanel>
        <Header>
          <HeaderLogo
            flavor={{
              light: 'oklch(0.5449 0.2154 262.74)',
              dark: 'oklch(0.5449 0.2154 262.74)'
            }}
          >
            Inertia 3
          </HeaderLogo>
        </Header>
        <SharedData />
      </MainPanel>
    </ThemeContextProvider>
  );
}
