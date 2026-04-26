# Apex Capital Society

A professional React landing page for Apex Capital Society (ACS), a student-led investing and financial literacy organization founded in Tampa.

## Run locally

This implementation is intentionally dependency-light because the current workspace does not expose `npm` on PATH. It uses editable React JSX, Tailwind CSS CDN, Framer Motion ESM CDN, and adapted 21st.dev interaction patterns.

```powershell
node .\serve.mjs
```

Then open `http://localhost:4173`.

## 21st.dev component sources

The scroll-driven practice feature adapts the 21st.dev community component `container-scroll-animation`:

- Component page: https://21st.dev/community/components/aceternity/container-scroll-animation
- Registry URL: https://21st.dev/r/aceternity/container-scroll-animation

The cursor and menu interactions are restrained adaptations of 21st.dev cursor and fluid-menu patterns.
