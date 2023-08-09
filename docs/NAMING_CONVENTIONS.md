## Branch naming convention

### Category
Git branch should start with a category:
- `feature` : is for adding, refactoring or removing a feature.
- `bugfix` : is for fixing a bug.
- `hotfix` : is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency).
- `test` : is for experimenting outside of an issue/ticket
- `chore` :  is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)

### Reference
It then needs to be followed by a `/`
Followed by the reference of the issue in the form `issue-<id>`
If there's no reference, simply write `no-ref`.

### Description
Issue title in kebab-case.
i.e. `[COMMAND REQUEST] - addphrase` should be : `command-request-addphrase`

### TL;DR

The complete naming convention for branche is the following:
`git branch category/reference/description-in-kebab-case`

### Examples

Adding/removing/refactoring feature:
`git branch feature/issue-42/create-new-button-component`

Fixing a bug:
`git branch bugfix/issue-342/button-overlap-form-on-mobile`

Hot-fixing a bug (temporary solution):
`git branch hotfix/no-ref/registration-form-not-working`

Experimenting something new:
`git branch test/no-ref/refactor-components-with-atomic-design`

## Commit naming convention

### Category

A commit should start with one of the following category:
- `feat` is for adding a new feature
- `fix` is for fixing a bug
- `refactor` is for changing code for peformance or convenience purpose (e.g. readibility)
- `chore` is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)

Followed by a `:`

If commit is related to an opened issue, add `#<issue-id>` after the semi-colon

### Statements

After the colon, the commit description should consist in short statements describing the changes.  
  
Each statement should start with a verb conjugated in an imperative way. Statements should be separated from themselves with a "`;`".

### TL;DR

Complete commit naming convention (not related to an issue):
`git commit -m '<category: do something; do some other things>'`

Complete commit naming convention (related to an issue):
`git commit -m '<category:#<issue-id> do something; do some other things>'`

### Examples

- `git commit -m 'feat: add new button component; add new button components to templates'`
- `git commit -m 'chore: write button documentation'`