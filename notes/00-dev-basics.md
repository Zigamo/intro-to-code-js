# Programming

## What is programming?

Programming is the mental process of thinking up instructions to give to a machine.

We simplify the process of communicating with computers and processors through languages and compilers that translate that language into machine code.

## What is JavaScript? aka JS

- It's not Java.
- Javascript is a programming language that was created to add interactivity to websites.
- Javascript is very flexible in that you can use it to write functionality outside of browsers as well.

## Hamburgers and the Web

There are three parts to a modern website:

- HTML: Hyper Text Markup Language - the raw ingredients for a site
- CSS: Cascading Style Sheets - Presentation of a finished website
- JS: Javascript - The functional ruleset of a website

JS files typical end in `.js`; Typescript files typically end in some form of `.ts`

## Logging values

- You can log the result of a function or evaluation to the console by passing in the value you want detailed with the paranthesis of `console.log(values, go, here)`. 
- If you would like to log more than one thing on a line, separate each value you want logged with commas. 

## Logging stuff to the console

You can view values in the console by passing one, or many values to a `console.log()` call.

## Basic Git Instructions

1. MAKE SURE ALL OF YOUR FILES ARE SAVED (NB: no number circle on your files icon top left of VSCode!!!!)
   1. To save all, `Ctrl-K, S`
2. No seriously, double-check for the love of god.
3. To stage files for a commit, we need to run `git add .` in your terminal.
   1. The `.` in the command represents your current directory, so you are telling git to add all of the files in the current directory to stage in preparation for a commit.
4. To check the progress of where our files are commit-wise we can run `git status`
   1. You can run this anytime as a freebie to check the status of your project in git.
5. To collect all of the files and the changes that have been made within we collect all of them in a commit. We want to make sure to provide a concise message that labels the contents of the commit as well. To create a commit out of your staged files, we run `git commit -m "your concise message detailing commit here"`
   1. e.g. if you've finished a portion of your testing, you could commit with the message `git commit -m "finish portion of 01 testing"`
      1. Best practice is to use the current imperative form as if your are commanding git to do whatever your message is saying
6. With our collection of changes put together into a commit, we can now send these changes to our remote online which serves as our online backup should anything happen to our local.
   1. Because this repo has two remotes it is important to keep in mind that you push to your origin.
   2. `git push origin`