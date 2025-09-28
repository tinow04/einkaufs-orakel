# UI Components

This folder contains **small, reusable UI building blocks**.  
These components should be **stateless**, **presentational**, and reusable across different features and views.

## Examples

- `Button.vue` – standard buttons (primary, secondary, etc.)
- `Input.vue` – text input fields
- `Badge.vue` – small status/label component
- `Card.vue` – wrapper for displaying grouped content

## Guidelines

- Keep components **generic** (no feature-specific logic).
- Accept **props** for customization instead of hardcoding styles.
- Use **slots** if flexible content is needed.
- Follow consistent naming conventions: `BaseComponent.vue` or `UiComponent.vue` is acceptable.
- Keep them **independent**: no direct dependency on feature stores or services.

## When to add a component here?

- If it is a **fundamental building block** that could be reused in different places.
- If it has **no feature-specific context**.
