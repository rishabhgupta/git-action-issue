# Github Issue Action

Actions creates a new github issue

## Inputs
### `token`
**required** github token
### `title`
**required** title of the issue
### `body`
body of the issue
### `assignees`
assignee of the issue

## Output
### issue 
Object containing issue payload


## Example Usage

```yml
- uses: ./.github/actions/issue
  id: Issue
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    title: Title
    body: body
    assignees: 'rishabhgupta'
- run: |
    echo ${{ steps.issue.outputs.issue }}
  ```