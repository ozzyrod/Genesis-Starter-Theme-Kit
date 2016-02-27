# Genesis Theme Starter - Dev Kit
### Finally, a starter theme for the Genesis Framework that doesn't complicate your life.

This is a development kit for my Starter Theme, built on the Genesis Framework. It includes a SCSS version of the styles in the theme, and a Gulp task file
which automates JS compression, SCSS compiling and compression, generation of a POT file for translation, and automatic zipping of the theme without including
the development files.

<a href="https://calvinkoepke.com/genesis-starter-theme/">Download the full Starter theme for free &rarr;</a>

License: MIT
Author: <a href="https://twitter.com/cjkoepke">Calvin Koepke</a>

### Reasons to Use Starter

1. It's lightweight (170kb development / kb production ).
2. It's mobile-first (read why <a href="https://calvinkoepke.com/mobile-first">this is a good thing</a>).
3. It comes pre-packaged with default settings and templates that are common in Genesis child theme development.
4. It removes unnecessary (and discouraged) templates from the parent Genesis theme (say goodbye to the blog template).
6. It has almost **zero** styling, reducing visual influence on your projects.
7. It comes with a ready-to-use, modified version of <a href="http://robincornett.com/genesis-responsive-menu/">Robin Cornett's responsive menu</a>.

### Optional Perks

1. Starter comes with SCSS files, but are not required to start out of the gate — just delete if that's not your thing.
2. It also comes with a landing page template, with ideas for more to be added in future releases.

## Installation
1. Clone the repo to your desktop, somewhere **other** than in your theme root (you don't want updates to override your theme edits!)
2. Copy the files in the cloned repo to your theme root.
3. Move `/scss/` to the `/assets/` directory.
3. In terminal, do the following command:
`npm install --save-dev`
4. You're good to go!

## What Gulp Does
1. The Gulp task file will watch dev files under `/assets/` in the SCSS/JS directories and rebuild files on the fly.
2. **Note:** To separate dev from prod files, the tasker will output minified files to a `/build/` folder at the theme root.
3. File naming will stay the same with `.min.ext` appended to the file name.