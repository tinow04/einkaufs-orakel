# Layout Components

This folder contains **structural components** that define the application's layout.  
These components help organize the global UI (navigation, headers, sidebars, footers).

## Examples
- `Header.vue` – top navigation bar
- `Footer.vue` – global footer
- `Sidebar.vue` – navigation/sidebar for groups or lists
- `LayoutWrapper.vue` – wraps pages with header/sidebar/footer

## Guidelines
- Layout components are responsible for **structure**, not business logic.
- They may import **UI components** (e.g., buttons, icons).
- They should not contain **feature-specific logic**.
- Keep them flexible with **slots** (e.g., `<slot />` for content areas).

## When to add a component here?
- If it is part of the **global application layout**.
- If it helps to structure **pages and views** but is not tied to a specific feature.
