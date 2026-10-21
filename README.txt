One-time setup for the page that shows your friends the current link:

1. On github.com create a new PUBLIC repository (e.g. "link"). Leave it empty.
2. In this folder, open a terminal and run (replace YOURNAME and link):
     git init -b main
     git add template.html README.txt
     git commit -m "Start"
     git remote add origin https://github.com/YOURNAME/link.git
     git push -u origin main
   (A browser window may open the first time to sign in to GitHub.)
3. On GitHub: repo > Settings > Pages > Deploy from a branch > main / (root) > Save.
4. Your friends' address is https://YOURNAME.github.io/link/ and never changes.

After that, new-link.bat updates and pushes index.html by itself every time the link changes.
GitHub Pages can take about a minute to show the new link.
The page is public, but the proxy still needs its PIN.
