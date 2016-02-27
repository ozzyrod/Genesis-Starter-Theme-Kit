# Genesis Starter Theme - Dev Kit

A development kit for WordPress themes which includes starter SCSS files and a Gulp task file which automates:

1. JS compression
2. SCSS compiling and compression
3. generation of a POT file for translation
4. Automatic zipping of the theme without including the development files.

<a href="#installation">Installation Instructions</a>

<hr/>

This dev kit was originally built for my own Starter theme on the Genesis Framework, but it can be used for any WordPress theme with minimal modification (mostly file structuring and naming differences).

<a href="https://calvinkoepke.com/genesis-starter-theme/">Download the full Starter theme for free &rarr;</a>

Follow me on Twitter: <a href="https://twitter.com/cjkoepke">@cjkoepke</a>

### Reasons to Use Starter

- It's lightweight (170kb development / kb production ).
- It's mobile-first (read why <a href="https://calvinkoepke.com/mobile-first">this is a good thing</a>).
- It comes pre-packaged with default settings and templates that are common in Genesis child theme development.
- It removes unnecessary (and discouraged) templates from the parent Genesis theme (say goodbye to the blog template).
- It has almost **zero** styling, reducing visual influence on your projects.
- It comes with a ready-to-use, modified version of <a href="http://robincornett.com/genesis-responsive-menu/">Robin Cornett's responsive menu</a>.
- It comes with a ready page template, like a Landing Page. Ideas for more to be added in future releases.

<a href="https://calvinkoepke.com/genesis-starter-theme/">Download the full Starter theme for free &rarr;</a>

</hr>

## Installation
- Clone the repo to your desktop, somewhere **other** than in your theme root (you don't want updates to override your theme edits!)
- Copy the files in the cloned repo to your theme root.
- Move `/scss/` to the `/assets/` directory.
- In terminal, navigate to the theme root directory, and do the following command:

	```npm install --save-dev```

- You're good to go!

## What Gulp Does
- The Gulp task file will watch dev files under `/assets/` in the SCSS/JS directories and rebuild files on the fly.
- **Note:** To separate dev from prod files, the tasker will output minified files to a `/build/` folder at the theme root.
- File naming will stay the same with `.min.ext` appended to the file name.