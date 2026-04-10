import { router, type Page } from '@inertiajs/core';
import { css } from 'goober';
import { createSignal, onCleanup, onMount } from 'solid-js';

import { Editor } from './editor';

function SharedData() {
  const element = document.querySelector('[data-page="app"][type="application/json"]');
  const initialPage: Page | null = element ? JSON.parse(element.innerHTML) : null;

  const [page, setPage] = createSignal(initialPage);

  onMount(() => {
    const _ = router.on('navigate', e => setPage(e.detail.page));
    onCleanup(() => _());
  });

  const value = () => JSON.stringify(page(), undefined, 4);

  return (
    <div
      class={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      `}
    >
      <Editor value={value} />
    </div>
  );
}

export { SharedData };
