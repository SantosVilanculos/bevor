import { router, type Page } from '@inertiajs/core';
import { css } from 'goober';
import { createSignal, onCleanup, onMount } from 'solid-js';

import { Editor } from './editor';

function SharedData() {
  const element = document.querySelector('[data-page="app"][type="application/json"]');
  const initialPage: Page | null = element ? JSON.parse(element.innerHTML) : null;

  const [page, setPage] = createSignal(initialPage);
  const [indent, setIndent] = createSignal(4);
  const [section, setSection] = createSignal<string>('all');

  onMount(() => {
    const _ = router.on('navigate', e => setPage(e.detail.page));
    onCleanup(() => _());
  });

  const getSectionData = () => {
    const p = page();
    const s = section();
    if (!p || s === 'all') return p;
    const key = s as keyof typeof p;
    return p[key] ?? null;
  };

  const value = () => JSON.stringify(getSectionData() ?? page(), undefined, indent());

  const toggleIndent = () => setIndent(prev => (prev === 4 ? 2 : 4));

  const sections = [
    { id: 'all', label: 'All' },
    { id: 'props', label: 'Props' },
    { id: 'errors', label: 'Errors' }
  ];

  return (
    <div
      class={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        height: var(--tsd-main-panel-height);
      `}
    >
      <div
        class={css`
          display: flex;
          gap: 4px;
          padding: 8px;
          border-bottom: 1px solid oklch(0.7 0 0);
          overflow-x: auto;
        `}
      >
        {sections.map(s => (
          <button
            onClick={() => setSection(s.id)}
            class={css`
              padding: 4px 8px;
              border: 1px solid oklch(0.7 0 0);
              border-radius: 4px;
              background: ${section() === s.id ? 'oklch(0.3 0 0)' : 'transparent'};
              color: ${section() === s.id ? 'oklch(1 0 0)' : 'inherit'};
              cursor: pointer;
              white-space: nowrap;
            `}
          >
            {s.label}
          </button>
        ))}
      </div>
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
          Copy {section() === 'all' ? 'All' : section()}
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
