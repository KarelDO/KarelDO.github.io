# Installation guide

## Heroku stuff

First download the Heroku cli and authenticate.

When creating a new Heroku app, make sure to specify `heroku create --region eu`.

Run the following commands:
```
heroku buildpacks:set heroku/nodejs
heroku config:set HOST=0.0.0.0
```

Deploying to heroku:
`git push heroku main`

Also commit changes to backup:
`git push origin main`