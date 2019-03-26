# Wazi About

## Example of build & static generation to preview page changes.

Start by cloning the `wazi-about` repo to your local machine

### Gulp: Build tool

- Install [Gulp](https://gulpjs.com/): `npm install --global gulp-cli`

- Navigate to the project's directory on your machine

- After making changes to any .scss file, run the command: `gulp styles`

### Jekyll: Static site generator

- Check if your Ruby version meets [Jekyll](https://jekyllrb.com/) requirements: `ruby -v`

  - Note: Jekyll requires Ruby 2.2.5 or above. If you’re running an older version you’ll need to [install a more recent Ruby version](https://jekyllrb.com/docs/installation/macos/#rbenv).

- Navigate to the project's directory on your machine

- Install Jekyll & Bundler: `gem install bundler jekyll`

- To install the gems, run: `bundle install`

- Build the site and make it available on a local server: `bundle exec jekyll serve`

- Open <http://localhost:4000> in a browser. Changes to html files will automatically regenerate & display when the browser is refreshed

## Resources

- [Gulp Quickstart](https://gulpjs.com/docs/en/getting-started/quick-start)
- [Jekyll Quickstart](https://jekyllrb.com/docs/)
