import { type Page } from '@inertiajs/core';
import { Editor } from 'prism-react-editor';
import {
  blockCommentFolding,
  bracketFolding,
  markdownFolding,
  tagFolding,
  useReadOnlyCodeFolding
} from 'prism-react-editor/code-folding';
import { useDefaultCommands, useEditHistory } from 'prism-react-editor/commands';
import { useCopyButton } from 'prism-react-editor/copy-button';

import 'prism-react-editor/copy-button.css';
import { useCursorPosition } from 'prism-react-editor/cursor';
import { usePrismEditor } from 'prism-react-editor/extensions';
import { IndentGuides } from 'prism-react-editor/guides';
import { useHighlightBracketPairs } from 'prism-react-editor/highlight-brackets';

import 'prism-react-editor/layout.css';
import { useBracketMatcher } from 'prism-react-editor/match-brackets';
import { useHighlightMatchingTags, useTagMatcher } from 'prism-react-editor/match-tags';
import 'prism-react-editor/prism/languages/json';
import 'prism-react-editor/scrollbar.css';
import {
  useHighlightSelectionMatches,
  useSearchWidget,
  useShowInvisibles
} from 'prism-react-editor/search';
import { useEditorTheme } from 'prism-react-editor/themes';

import 'prism-react-editor/search.css';
import { useEffect, useState } from 'react';

import { eventClient } from './event-client';
import type { DevtoolsPanelProps } from './types';

function EditorExtensions() {
  const [editor] = usePrismEditor();
  useBracketMatcher(editor);
  useCopyButton(editor);
  useCursorPosition(editor);
  useDefaultCommands(editor);
  useEditHistory(editor);
  useHighlightBracketPairs(editor);
  useHighlightMatchingTags(editor);
  useHighlightSelectionMatches(editor);
  useReadOnlyCodeFolding(editor, blockCommentFolding, bracketFolding, markdownFolding, tagFolding);
  useSearchWidget(editor);
  useShowInvisibles(editor);
  useTagMatcher(editor);

  return <IndentGuides />;
}

function Component({
  theme,
  initialPage
}: {
  theme: DevtoolsPanelProps['theme'];
  initialPage: Page | null;
}) {
  const [page, setPage] = useState<Page | null>(initialPage);

  useEffect(() => {
    const navigate = eventClient.on('navigate', e => setPage(e.payload.detail.page));

    return () => {
      navigate();
    };
  }, []);

  const themeCss = useEditorTheme(theme === 'dark' ? 'github-dark' : 'github-light');

  return (
    themeCss && (
      <>
        <style>{themeCss}</style>
        <Editor
          className="font-mono"
          language="json"
          readOnly
          tabSize={4}
          value={page ? JSON.stringify(page, undefined, 4) : ''}
        >
          <EditorExtensions />
        </Editor>
      </>
    )
  );
}

export { Component };
