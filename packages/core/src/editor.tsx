import { css } from 'goober';
import { createEffect, on, onCleanup } from 'solid-js';

function Editor({ value }: { value: () => string }) {
  let containerRef: HTMLDivElement | undefined;
  let editorInstance: any;
  let currentValue: string;

  createEffect(() => {
    if (!containerRef) return;

    import('prism-code-editor/setups')
      .then(({ minimalEditor }) => {
        const editor = minimalEditor(
          containerRef as HTMLElement,
          {
            language: 'json',
            tabSize: 4,
            value: value(),
            theme: 'github-dark',
            readOnly: true
          },
          () => {
            currentValue = value();
            const shadow = containerRef!.shadowRoot;
            if (shadow) {
              const editorContainer = shadow.querySelector('.prism-code-editor') as HTMLElement;
              if (editorContainer) {
                editorContainer.style.flex = '1';
              }
            }
          }
        );

        editorInstance = editor;
        onCleanup(() => editor.remove());
      })
      .catch(err => console.error('Error loading editor:', err));
  });

  createEffect(
    on(
      () => value(),
      newValue => {
        if (editorInstance && newValue !== currentValue) {
          currentValue = newValue;
          editorInstance.setOptions({ value: newValue });
        }
      }
    )
  );

  return (
    <div
      ref={containerRef}
      class={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      `}
    />
  );
}

export { Editor };
