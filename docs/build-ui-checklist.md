# Ric's Notebook build and UI checklist

Repair branch, 2026-10-12. Review candidate. Merge and production deployment are approved once checks pass.

## Failure diagnosis

The failed production commit is `fbb2ac9952baec5798d010832bc4a6a8fac0911f` (merged Ric series PR #26). Vercel reports failure during `pnpm install`. Historical detailed deployment logs were unavailable through the connected API.

A local unpinned pnpm 11 invocation reproduced `ERR_PNPM_LOCKFILE_CONFIG_MISMATCH` because the manifest uses pnpm 10's package-level overrides. The declared pnpm 10.33.4 accepts the existing frozen lockfile. This is a reproduced compatibility issue, not proof that the historical deployment used pnpm 11.

Vercel documents that a bare overridden `pnpm install` can select its oldest bundled pnpm version: <https://vercel.com/docs/package-managers>. The committed Vercel commands explicitly invoke the already-declared pnpm 10.33.4, without disabling frozen-lockfile or peer checks. Application dependency versions and the existing lockfile are preserved.

## Completed static checks

- [x] All 403 Markdown/MDX frontmatter files parse.
- [x] The four Ric series Markdown files are byte-for-byte unchanged from the failed commit.
- [x] All 19 internal references in the Ric series resolve to existing source posts.
- [x] Allow only GitHub's `/user-attachments/assets/**` image path for the existing cover images.
- [x] Keep local and preview builds from submitting IndexNow URLs; submission is available explicitly with `pnpm indexnow`.
- [x] Replace the removed `next lint` command with an ESLint 9 flat-config workflow.
- [x] Limit concurrent MDX prerendering to reduce CI memory spikes.

## Required runtime and CI checks

- [x] Clean CI install using pnpm 10.33.4 and the frozen lockfile.
- [ ] Complete non-mutating lint.
- [ ] Complete the production build, RSS generation, and sitemap generation.
- [ ] Verify all four Ric series routes appear in the prerender manifest and are not 404 fallbacks.
- [ ] Verify cover image responses in the deployed preview; the source URLs are preserved, but anonymous cloud HEAD requests currently receive upstream 403 responses after redirects.
- [ ] Inspect the home page and each Ric article on desktop and mobile.
- [ ] Test article links, theme switching, navigation, keyboard focus, and Back/Forward.
- [ ] Verify the exact pushed commit's GitHub checks and Vercel preview.
- [x] Obtain approval before merge or production deployment.

The review-branch workflow performs frozen install, content validation, production compilation, Ric-series route/image-configuration/link assertions, and lint. A green local compile alone is not a green production deployment.

## CI diagnosis

The first clean CI run installed successfully and Next rendered all 1,731 pages. The following RSS stage exposed an existing missing `scripts/generate-rss.js`. Restore the generator (using the same implementation as the other blog satellites), stop ignoring the scripts directory, and repeat the full build. No article content changed.
