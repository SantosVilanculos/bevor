# Bevor Devtools Improvements Plan

## Current State
- Displays Inertia page props in read-only JSON editor with Prism Code Editor
- Has `copyButton` and `searchWidget` extensions
- Uses TanStack DevTools UI components: Header, HeaderLogo, MainPanel, ThemeContextProvider

## Planned Improvements

### 1. Action Bar with Buttons
Add a toolbar with action buttons using TanStack DevTools UI `Button` component:
- **Copy All Data** - Copy full JSON to clipboard (enhance visibility beyond the extension)
- **Expand/Collapse All** - Toggle all JSON nodes expanded/collapsed
- **Reset View** - Reset editor to initial state

### 2. Indentation Options
Add controls to change JSON formatting:
- Toggle between 2-space and 4-space indentation
- Persist preference

### 3. Structured Section Views
Use TanStack DevTools UI `Section` component to organize data:
- Group Inertia page data by:
  - `props` - Page props
  - `errors` - Validation errors
  - `locale` - Localization data
  - `auth` - Authentication info

## Technical Notes

- All components available from `@tanstack/devtools-ui`
- Use existing goober `css` for custom styling
- Editor already uses Shadow DOM for CSS isolation
- Theme already switches `github-dark` / `github-light` based on context