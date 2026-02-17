# Website Codebase Review & Improvement Recommendations

This review focuses on maintainability, performance, accessibility, and production readiness.

## High-priority recommendations

1. **Add TypeScript type-checking to CI and local scripts**
   - The app is written in `.tsx`, but there is no `tsconfig.json` and no type-check script.
   - A concrete bug currently slips through build checks: `GetHelp.tsx` declares `HelpFormData` but uses `ApplicationFormData` in `onSubmit`.
   - Recommendation:
     - Add `typescript` + `@types/react` + `@types/react-dom` as dev dependencies.
     - Add `tsconfig.json`.
     - Add scripts: `typecheck` (`tsc --noEmit`) and `check` (`npm run typecheck && npm run build`).

2. **Reduce bundle and dependency bloat**
   - Production bundle includes a very large logo image (~1.6 MB) and ~490 KB JS before gzip.
   - `src/app/components/ui/*` appears to contain a full design-system scaffold that is currently not imported by feature pages.
   - Recommendation:
     - Replace oversized assets with optimized WebP/AVIF variants where possible.
     - Remove unused UI components and related dependencies, or split them to a separate branch/package.
     - Re-run build and track JS/CSS/image size budget in CI.

3. **Harden serverless form handlers**
   - `/functions/api/gethelp.js` and `/functions/api/application.js` accept arbitrary JSON fields and forward directly to email payloads.
   - There is basic HTML escaping, but no schema validation, no required-field enforcement, no rate limiting, and no abuse controls.
   - Recommendation:
     - Validate request payloads against explicit schemas.
     - Enforce field length limits and reject unknown keys.
     - Add anti-abuse controls (rate limiting / CAPTCHA / bot checks).
     - Add structured error logging for operational visibility.

## Medium-priority recommendations

4. **Improve accessibility and semantics**
   - Many interactive sections use generic containers and custom buttons/links.
   - Recommendation:
     - Ensure heading hierarchy remains strictly ordered per page.
     - Add visible focus states and keyboard testing checklist.
     - Add `aria-current="page"` for active navigation links.

5. **Increase reliability of forms UX**
   - Forms rely on alert-based error handling and optimistic success transitions.
   - Recommendation:
     - Add inline API error banners and disabled-submit loading states.
     - Add server error details in a safe, user-readable way.
     - Reset forms after successful submission.

6. **SEO and content quality pass**
   - The app currently uses a single static `<title>`/description in `index.html`.
   - Recommendation:
     - Add route-level metadata (title + description + social tags).
     - Add canonical URL and Open Graph/Twitter tags.

## Low-priority recommendations

7. **Developer experience improvements**
   - Add linting/formatting scripts (`eslint`, `prettier`) and pre-commit checks.
   - Add a short architecture/readme section for page/component conventions and API contracts.

8. **Testing baseline**
   - Add at least:
     - Unit tests for form validation helpers.
     - Integration tests for API handlers (success, validation failure, email provider failure).
     - One smoke e2e route test for homepage + forms.

## Suggested implementation order (2–3 short iterations)

1. Type safety + checks (`tsconfig`, `typecheck`, fix current mismatch).
2. API validation/security and improved form error handling.
3. Performance pass (asset optimization + remove unused UI/deps).
4. SEO + accessibility hardening.
5. Add test baseline and CI gates.

