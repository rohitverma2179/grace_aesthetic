# How to Fix: GitHub Large File Size Error (GH001)

If you see an error like `remote: error: File [filename] is X MB; this exceeds GitHub's file size limit of 100.00 MB`, it means you have committed a large file to your local Git history. 

Even if you delete the file later, Git still tries to upload it because it exists in the "history" of your commits. 

Follow these steps to fix it:

### Step 1: Identify the problem
The error message will tell you which file is too large (e.g., `dist.zip`).

### Step 2: Soft Reset to a working state
You need to move your Git "pointer" back to the last time the code was successfully on GitHub, but keep your current code changes.
```powershell
git reset --soft origin/main
```


### Step 3: Remove the large file from Git tracking
Even if the file is deleted from your folder, Git might still "index" it. Use this command to tell Git to stop tracking it:
```powershell
git rm --cached -f dist.zip
```
*(Replace `dist.zip` with your actual large filename)*

### Step 4: Ignore the file permanently
Make sure the file type is in your `.gitignore` file so it doesn't get added again. Open `.gitignore` and add:
```text
*.zip
dist/
```

### Step 5: Re-commit your changes
Now, create a new "clean" commit that doesn't include the large file.
```powershell
git add .
git commit -m "Your commit message here"
```

### Step 6: Push to GitHub
Now your push will succeed because the large file is no longer in the history.
```powershell
git push origin main
```

---
**Pro Tip:** If you absolutely need to host large files (like 4K videos or huge datasets) on GitHub, you should use **Git LFS (Large File Storage)**: https://git-lfs.github.com
