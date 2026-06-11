# Hotel Operations System

A shareable static prototype for a hotel task workflow:

- Guest room iPad request portal
- Front desk audio task capture
- Staff Kanban board
- Task detail page
- Operations control dashboard
- Reporting and analytics

## GitHub Ready

This folder is ready to push directly to GitHub. It includes:

- `.github/workflows/pages.yml` for GitHub Pages deployment
- `.nojekyll` so GitHub Pages serves static files as-is
- `manifest.webmanifest` and `sw.js` for installable/offline behavior
- `netlify.toml` and `vercel.json` in case you later want another static host

## Push To GitHub

Create an empty GitHub repository, then run these commands from this folder:

```sh
git init
git branch -M main
git add .
git commit -m "Create hotel operations system"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

After pushing, open the repository on GitHub and enable Pages:

1. Go to Settings > Pages.
2. Choose GitHub Actions as the source.
3. The included workflow will publish the site after the next push.

## Other Deploy Options

This project has no build step. Upload the folder to any static host.

### Netlify

Drag this folder into Netlify Drop, or connect it as a Git repository. Publish directory: `.`.

### Vercel

Import the folder/repository as a static project. Output directory: `.`.

### GitHub Pages

Push these files to a GitHub repository, then enable Pages with branch `main` and folder `/root`.

## Local Preview

Run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000`.

Task changes are saved in each browser with `localStorage`. For a real multi-user hotel deployment, replace the local data store with a shared backend such as Supabase, Firebase, or a custom API.
