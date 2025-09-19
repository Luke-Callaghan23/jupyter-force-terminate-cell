import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('jupyter-force-terminate-cell.terminateCell', async () => {
        await vscode.commands.executeCommand('notebook.cell.quitEdit');
        await vscode.commands.executeCommand('notebook.cell.changeToMarkdown');
        await vscode.commands.executeCommand('notebook.cell.changeToCode');
    }));
}
export function deactivate() {}
