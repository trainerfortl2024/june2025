## Objective
Write a script that reads all files and directories in the current folder and displays each file's status (whether it's a file or directory).

## Steps
1. Create a script called listFiles.js.  
Use fs.readdir to read the contents of the current directory and fs.stat to determine whether each item is a file or a directory.  

2. Check the file type:  
For each item, log whether it is a file or a directory using fs.stat. Implement this with either callbacks, promises, or async/await.  