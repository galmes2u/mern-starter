# MERN Starter

This is a small MERN starter package for my students. It combines a front-end React app with an Express back-end, all in the same codebase.

## In Development

When we start everything up:
- The React dev environment will load up; it will run on one port  (:3000)
- The Express server will also boot up, and it will run on a different port (:3001)

## In Production

- The Express server boots up, and runs on a standard web port, and it would accessible via a unique url 
- We run a build process when all the files are delivered to Heroku and its run npm run start 
- The build process compiles all the React stuff and sends the optimized files to the browser
