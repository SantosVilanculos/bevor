# Changelog

## v0.2.1 (2026-04-11)

### Bug Fixes
- Fix filters in shared-data to properly return props and errors
- Return empty object instead of null when section data is unavailable

---

## v0.2.0 (2026-04-10)

### Features
- Add copy button extension to code editor
- Add search widget extension to code editor
- Make editor read-only for request/response data

### Improvements
- Update React package API names: `inertiaDevtoolsPlugin` → `inertia3DevtoolsPlugin`, `InertiaDevtoolsPanel` → `Inertia3DevtoolsPanel`
- Add flex layout for proper editor height sizing
- Fix type definition formatting in core package

### Bug Fixes
- Scope all library CSS to `.bevor` selector to prevent conflicts with user code
- Scope theme variables to `.bevor` prefix
- Disable default theme variables to prevent CSS conflicts

---

## v0.1.4 (2026-04-09)

### Bug Fixes
- Scope styles with prefix to prevent conflicts with user CSS