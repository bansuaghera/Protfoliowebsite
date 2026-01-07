# Vercel NOT_FOUND Error - Complete Fix & Explanation

## 1. The Fix

I've created a `vercel.json` file in your project root with the following configuration:

```json
{
  "buildCommand": "cd Protfolio && npm install && npm run build",
  "outputDirectory": "Protfolio/dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**What this does:**
- **`buildCommand`**: Tells Vercel to navigate to the `Protfolio` directory and run the build
- **`outputDirectory`**: Points Vercel to where your built files are located (`Protfolio/dist`)
- **`rewrites`**: Ensures all routes serve `index.html` (essential for SPAs)

## 2. Root Cause Analysis

### What Was Happening vs. What Should Happen

**What was happening:**
1. Vercel was looking for files in the repository root (`Protfoliowebsite/`)
2. Your actual project is in a subdirectory (`Protfolio/`)
3. Vercel couldn't find the build output because it was looking in the wrong place
4. When accessing any route, Vercel tried to find a file at that path, failed, and returned NOT_FOUND

**What should happen:**
1. Vercel should know to look in the `Protfolio` subdirectory
2. It should build from that directory
3. It should serve files from `Protfolio/dist`
4. All routes should serve `index.html` so your React app can handle navigation

### Conditions That Triggered This Error

- **Project structure**: Your project is nested in a subdirectory (`Protfolio/`) rather than at the repository root
- **Missing configuration**: No `vercel.json` file to tell Vercel where to find your project
- **SPA routing**: Even though you use hash-based navigation (`#about`, `#skills`), Vercel still needs to know how to serve your app

### The Misconception/Oversight

**The oversight:** Assuming Vercel would automatically detect your project structure. While Vercel has excellent auto-detection for projects at the root, it needs explicit configuration when:
- Projects are in subdirectories
- Build outputs are in non-standard locations
- You need custom routing rules

## 3. Understanding the Concept

### Why This Error Exists

The `NOT_FOUND` error is Vercel's way of saying: "I looked for the resource you requested, but I couldn't find it." This protects you from:
- Serving incorrect or missing files
- Breaking user experience with malformed responses
- Security issues from serving unintended content

### The Correct Mental Model

Think of Vercel deployment in three layers:

1. **Repository Structure** → Where your code lives
2. **Build Process** → How your code gets compiled
3. **Serving Strategy** → How requests are handled

For your case:
- **Repository**: Code is in `Protfolio/` subdirectory
- **Build**: Vite compiles to `Protfolio/dist/`
- **Serving**: All routes should serve `index.html` (SPA pattern)

### How This Fits Into Vercel's Framework

Vercel is designed to:
- Auto-detect frameworks (React, Next.js, etc.)
- Auto-configure build settings
- Handle routing intelligently

However, when your project structure deviates from the standard (subdirectories, custom build outputs), you need to provide explicit configuration via `vercel.json`. This is by design - it gives you control while maintaining sensible defaults.

## 4. Warning Signs & Prevention

### What to Look Out For

**Red flags that might cause this again:**
- ✅ Project in a subdirectory without `vercel.json`
- ✅ Custom build output directory not specified
- ✅ SPA without rewrite rules
- ✅ Multiple projects in one repository without proper configuration
- ✅ Build command that doesn't match your project structure

### Similar Mistakes to Avoid

1. **Forgetting to update `vercel.json`** when moving project directories
2. **Incorrect paths** in `outputDirectory` (relative vs absolute)
3. **Missing rewrites** when adding client-side routing later
4. **Build command issues** - forgetting to `cd` into subdirectory
5. **Case sensitivity** - Windows vs Linux path handling

### Code Smells & Patterns

**Indicators of potential issues:**
- No `vercel.json` file in a non-standard project structure
- Build artifacts in unexpected locations
- 404 errors on direct route access
- Deployment succeeds but site shows NOT_FOUND
- Multiple `package.json` files in different directories

## 5. Alternative Approaches & Trade-offs

### Alternative 1: Vercel Dashboard Configuration

Instead of `vercel.json`, you can configure in Vercel Dashboard:
- **Settings → General → Root Directory**: Set to `Protfolio`
- **Settings → Build & Development Settings**: Configure build command and output directory

**Trade-offs:**
- ✅ Easier for non-technical team members
- ❌ Not version-controlled (settings live only in Vercel)
- ❌ Harder to replicate across environments
- ❌ Can be lost if project is recreated

**When to use:** Quick fixes, one-off deployments, or when you can't modify the repository.

### Alternative 2: Move Project to Root

Move everything from `Protfolio/` to the repository root:

**Trade-offs:**
- ✅ Simpler structure, Vercel auto-detects everything
- ✅ No configuration needed
- ❌ Requires restructuring your repository
- ❌ Might conflict with other projects in the same repo
- ❌ Loses the organizational benefit of subdirectories

**When to use:** If this is the only project in the repository and you want maximum simplicity.

### Alternative 3: Monorepo Configuration

If you have multiple projects, use a monorepo setup:

```json
{
  "builds": [
    {
      "src": "Protfolio/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/Protfolio/dist/$1"
    }
  ]
}
```

**Trade-offs:**
- ✅ Supports multiple projects in one repo
- ✅ More flexible routing
- ❌ More complex configuration
- ❌ Overkill for single-project repos

**When to use:** Multiple projects, shared components, or complex routing needs.

### Recommended Approach

**Use `vercel.json` (what we implemented)** because:
- ✅ Version-controlled (everyone sees the same config)
- ✅ Reproducible across environments
- ✅ Clear and explicit
- ✅ Works with CI/CD pipelines
- ✅ Easy to review in pull requests

## Next Steps

1. **Commit the `vercel.json` file** to your repository
2. **Redeploy on Vercel** - it should automatically pick up the new configuration
3. **Test your deployment** - verify all routes work correctly
4. **Monitor the build logs** - ensure the build command executes correctly

## Verification Checklist

After deploying, verify:
- [ ] Homepage loads correctly
- [ ] Hash navigation works (`#about`, `#skills`, etc.)
- [ ] Assets (images, CSS, JS) load properly
- [ ] No 404 errors in browser console
- [ ] Build completes successfully in Vercel dashboard

## Additional Resources

- [Vercel Configuration Documentation](https://vercel.com/docs/configuration)
- [Vercel Build Output API](https://vercel.com/docs/build-output-api)
- [SPA Routing on Vercel](https://vercel.com/docs/configuration#rewrites)

