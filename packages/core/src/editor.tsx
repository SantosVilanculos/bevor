import { css } from 'goober';
import { createEffect, on, onCleanup } from 'solid-js';
import editorStyles from './index.css?inline';

function Editor({ value }: { value: () => string }) {
  let containerRef: HTMLDivElement | undefined;
  let editorInstance: any;
  let currentValue: string;
  let initialized = false;

  createEffect(() => {
    if (!containerRef || initialized) return;
    initialized = true;

    (async () => {
      const [{ minimalEditor }, { copyButton }, { searchWidget }] = await Promise.all([
        import('prism-code-editor/setups'),
        import('prism-code-editor/copy-button'),
        import('prism-code-editor/search')
      ]);
          
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
          editor.addExtensions(
            copyButton(),
            searchWidget()
          );
          const shadow = containerRef!.shadowRoot;
          if (shadow) {
            const style = document.createElement('style');
            style.textContent = editorStyles;
            shadow.appendChild(style);
            const editorContainer = shadow.querySelector('.prism-code-editor') as HTMLElement;
            if (editorContainer) {
              editorContainer.style.flex = '1';
            }
          }
        }
      );

      editorInstance = editor;
      onCleanup(() => editor.remove());
    })();
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
        --editor__line-height: 1.6;
      `}
    />
  );
}

export { Editor };
