# Lab 6: Deployment Using GitHub Pages

## Objective
Deploy your **HTML/CSS dashboard project** publicly using **GitHub Pages** so you can easily share it with peers and add it to your portfolio.

---

## Step-by-Step Deployment (Clean, Correct, and Aligned with Lab 5)

### 1️⃣ Prepare Your Project
- Go to your `lab5` folder containing `lab5.html` and `styles_lab5.css`.
- Create a new folder named `lab6`.
- Copy `lab5.html` and `styles_lab5.css` into the `lab6` folder.
- Rename `lab5.html` to `index.html` inside the `lab6` folder.
- Ensure `index.html` correctly links to `styles_lab5.css`:
```html
<link rel="stylesheet" href="styles_lab5.css">
```
✅ Now your `lab6` folder should have:
- `index.html`
- `styles_lab5.css`

---

### 2️⃣ Initialize Git and Commit Locally
Open your terminal:
```bash
cd path/to/lab6
git init
git add .
git commit -m "Initial commit for GitHub Pages deployment"
```

---

### 3️⃣ Create Repository on GitHub
- Log in to [GitHub](https://github.com).
- Click **New repository**.
- Name it `online-shop-dashboard` (or a relevant name).
- Set visibility to **Public**.
- Do not add a README.
- Click **Create repository**.

---

### 4️⃣ Connect Local Repository to GitHub
Copy the repository URL shown by GitHub and run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/online-shop-dashboard.git
git branch -M main
git push -u origin main
```

---

### 5️⃣ Enable GitHub Pages
- Go to your repository **Settings > Pages**.
- Under **Branch**, select `main` and `/root`.
- Click **Save**.
- Wait 30-60 seconds.

---

### 6️⃣ Access Your Deployment URL
Your live site will be available at:
```
https://YOUR_USERNAME.github.io/online-shop-dashboard/
```
✅ Share this URL with your peers and use it in your portfolio.

---

## Key Reminders
✅ GitHub Pages **requires `index.html` in the root** of your repository for the root URL to work.
✅ Ensure file names are **exactly correct**.
✅ Ensure your CSS file is linked correctly in `index.html`.

---

## If Your Deployment URL Does Not Work
- Refresh the Pages section after 1-2 minutes.
- Confirm `index.html` is at the **repository root**.
- Check for spelling and link correctness.
- If issues persist, disable Pages and re-enable it.

---

## Updating Your Deployment in the Future
Whenever you update files:
```bash
git add .
git commit -m "Updated content"
git push
```
✅ Your deployment will update automatically.

---

If you face any issues, contact your trainer immediately to debug and ensure your project is live.

