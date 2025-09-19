# jupyter-force-terminate-cell README

This VSCode extension adds one command that forces termination of a jupyter notebook cell.  Often when hitting the default terminate button on a notebook cell, nothing really happens and the cell continue to execute or just never finishes.  This extension solves that by forcing termination.

Termination of a cell can be forced by converting the cell to markdown, and then re-converting it back to code.  When it becomes a markdown cell, all execution on that cell finishes immediately in a way that the terminate does not.

## Features

Default keybinding for force quit is `Ctrl+k, ctrl+e`.

The command is also accessible through the command palette or the menu bar above each cell in your notebook (the warning sign icon).

### 1.0.0

Initial release of jupyter-force-terminate-cell