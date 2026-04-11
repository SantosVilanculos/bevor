import { router, type Page } from '@inertiajs/core';
import { Button } from '@tanstack/devtools-ui';
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
    if (s === 'props') return p['props'];
    if (s === 'errors') return p.props['errors'];
    return {};
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
          <Button onClick={() => setSection(s.id)}>{s.label}</Button>
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
        <Button onClick={() => navigator.clipboard.writeText(value())}>
          Copy {section() === 'all' ? 'All' : section()}
        </Button>
        <Button onClick={toggleIndent}>{indent()} spaces</Button>
      </div>
      <Editor value={value} />
    </div>
  );
}

export { SharedData };
