# Partial security remediation — 2026-10-16

Status: incomplete; do not treat this draft as clearing all security warnings.

Applied compatible transitive npm updates within the existing manifest constraints. Kept framework versions together and did not suppress advisories or use npm audit fix --force. Added grouped weekly Dependabot security updates. Native build/install scripts were disabled while resolving dependencies.

## Remaining work

The Ember client still needs a supported-framework/tooling migration. The PHP backend pins Phinx 0.5, which requires vulnerable Symfony YAML 2/3; PHP ^7.3 and Phalcon 4 also require coordinated runtime/framework work. Composer refused to resolve an advisory-free set under those constraints. No PHP dependency change is included.

## Validation and limitations

The npm lockfiles were resolved with --package-lock-only --ignore-scripts --legacy-peer-deps. This is dependency resolution, not a successful build or runtime test. These legacy applications were not executed. Review compatibility and run their tests/device builds before merging. Critical/high findings remain; alerts must stay open. Bundled libraries and unlocked projects are not certified clean.

## Dependency audit snapshots

- `client`: 146 vulnerable packages (28 low, 35 moderate, 52 high, 31 critical).
