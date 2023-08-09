---
name: Command Request
about: This template is to request a new command for the Telegram Bot
title: "[COMMAND REQUEST] - <command name>"
labels: command
assignees: ''

---

What is the name of the command you'd like ?
addphrase

Does your command require parameters ?
A bullet list of parameters and what it should be:

phrase: all the text after the command or the full text of the message replied to
What is the syntax of your command ?
/command param

Describe the response of the bot
The bot should send a message containing the text added to the database

Additional context
The command should save the phrase sent to the bot in the database so that the eightball command can send this phrase randomly.
