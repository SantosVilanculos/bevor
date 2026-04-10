import { router, type Page } from '@inertiajs/core';
import { css } from 'goober';
import { createSignal, onCleanup, onMount } from 'solid-js';

import { Editor } from './editor';

function SharedData() {
  const element = document.querySelector('[data-page="app"][type="application/json"]');
  const initialPage: Page | null = element ? JSON.parse(element.innerHTML) : null;

  const [page, setPage] = createSignal(initialPage);
  const [indent, setIndent] = createSignal(4);

  onMount(() => {
    const _ = router.on('navigate', e => setPage(e.detail.page));
    onCleanup(() => _());
  });

  const value = () => JSON.stringify(page(), undefined, indent());

  const toggleIndent = () => setIndent(prev => (prev === 4 ? 2 : 4));

  return (
    <div
      class={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      `}
    >
      <div
        class={css`
          display: flex;
          gap: 8px;
          padding: 8px;
          border-bottom: 1px solid oklch(0.7 0 0);
        `}
      >
        <button
          onClick={() => navigator.clipboard.writeText(value())}
          class={css`
            padding: 4px 8px;
            border: 1px solid oklch(0.7 0 0);
            border-radius: 4px;
            background: transparent;
            cursor: pointer;
          `}
        >
          Copy All
        </button>
        <button
          onClick={toggleIndent}
          class={css`
            padding: 4px 8px;
            border: 1px solid oklch(0.7 0 0);
            border-radius: 4px;
            background: transparent;
            cursor: pointer;
          `}
        >
          {indent()} spaces
        </button>
      </div>
      <Editor value={value} />
    </div>
  );
}

export { SharedData };
