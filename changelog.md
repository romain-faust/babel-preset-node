# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

-   Fix a problem with the Babel configuration not exporting a function.

## [2.0.1] - 2021-10-19

### Changed

-   Update the `License` section of the `readme.md`.
-   Update the `Usage` section of the `readme.md`.

## [2.0.0] - 2021-10-19

### Changed

-   Use `npmjs.com` instead of `npmjs.org` in the `publish.yml` action.
-   Update the [`prettier`](https://npmjs.com/package/prettier) version to [`~2.4.1`](https://npmjs.com/package/prettier/v/2.4.1).
-   Update the [`@romain-faust/prettier-config`](https://npmjs.com/package/@romain-faust/prettier-config) version to [`~2.3.1`](https://npmjs.com/package/@romain-faust/prettier-config/v/2.3.1).
-   Update the [`lint-staged`](https://npmjs.com/package/lint-staged) version to [`~11.2.3`](https://npmjs.com/package/lint-staged/v/11.2.3).
-   Update the [`husky`](https://npmjs.com/package/husky) version to [`~7.0.2`](https://npmjs.com/package/husky/v/7.0.2).
-   Update the expected [`@babel/core`](https://npmjs.com/package/@babel/core) version to [`^7.15.8`](https://npmjs.com/package/@babel/core/v/7.15.8).
-   Update the expected [`@babel/preset-env`](https://npmjs.com/package/@babel/preset-env) version to [`^7.15.8`](https://npmjs.com/package/@babel/preset-env/v/7.15.8).
-   Replace [`babel-plugin-module-resolver`](https://npmjs.com/package/babel-plugin-module-resolver) with [`babel-plugin-tsconfig-paths-module-resolver`](https://npmjs.com/package/babel-plugin-tsconfig-paths-module-resolver).

## [1.1.0] - 2021-08-24

### Added

-   Create the `pre-commit` hook.

### Changed

-   Enable the `allowDeclareFields` option of `@babel/preset-typescript`.
-   Enable the `onlyRemoveTypeImports` option of `@babel/preset-typescript`.
-   Rename the GitHub issue templates.
-   Remove the `Install dependencies` step from the `publish` workflow.
-   Update the dependencies versions.
-   Simplify the `Usage` section of the `readme.md`.
-   Update the `files` and `repository` sections of the `package.json`.

## [1.0.0] - 2021-06-14
