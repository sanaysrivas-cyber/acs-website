# Apex Capital Society

A professional React landing page for Apex Capital Society (ACS), a student-led investing and financial literacy organization founded in Tampa.

## Run locally

This implementation is intentionally dependency-light because the current workspace does not expose `npm` on PATH. It uses editable React JSX, Tailwind CSS CDN, Framer Motion ESM CDN, and the 21st.dev Spline hero scene.

```powershell
node .\serve.mjs
```

Then open `http://localhost:4173`.

## 21st.dev component source

The hero visual adapts the 21st.dev community component `3d-hero-section-boxes`:

- Component page: https://21st.dev/community/components/aghasisahakyan1/3d-hero-section-boxes
- Registry URL: https://21st.dev/r/aghasisahakyan1/3d-hero-section-boxes
- Spline scene: https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode

If the Spline viewer fails to load, the hero still shows a CSS-based ACS 3D fallback visual.
