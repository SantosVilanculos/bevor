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
              light: 'oklch(51.4% 0.222 16.935)',
              dark: 'oklch(58.6% 0.253 17.585)'
            }}
          >
            Component
          </HeaderLogo>
        </Header>
        <SharedData />
      </MainPanel>
    </ThemeContextProvider>
  );
}
