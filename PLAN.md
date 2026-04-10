# Bevor Devtools Improvements Plan

## Current State
- Displays Inertia page props in read-only JSON editor with Prism Code Editor
- Has `copyButton` and `searchWidget` extensions
- Uses TanStack DevTools UI components: Header, HeaderLogo, MainPanel, ThemeContextProvider

## Planned Improvements

### 1. Action Bar with Buttons ✅
Add a toolbar with action buttons using TanStack DevTools UI `Button` component:
- **Copy All Data** - Copy full JSON to clipboard (enhance visibility beyond the extension) ✅
- ~~Expand/Collapse All~~ - Not applicable for text-based editor
- ~~Reset View~~ - Not needed

### 2. Indentation Options ✅
Add controls to change JSON formatting:
- Toggle between 2-space and 4-space indentation ✅
- ~~Persist preference~~ - Not implemented (would require storage)

### 3. Structured Section Views ✅
Tab-based organization of page data:
- All - View all page data
- Props - Page props
- Errors - Validation errors
- Locale - Localization data
- Auth - Authentication info

## Technical Notes

- All components available from `@tanstack/devtools-ui`
- Use existing goober `css` for custom styling
- Editor already uses Shadow DOM for CSS isolation
- Theme already switches `github-dark` / `github-light` based on context