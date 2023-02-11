# project_name

## CLI Commands

Preact CLI is a command-line interface that can be run in the terminal on your machine. Using it, 
you can create a new application by running the create command:

npx preact-cli create default project_name

Note: Please use <18 version of node. 

```bash

# Go into the generated project folder
cd my-project

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).


# Start a development server
npm run dev

Once the server has started, it will print a local development URL to open in your browser. Now you're ready to start coding your app. Like this
http://localhost:8080

Making a production build

There comes a time when you need to deploy your app somewhere. The CLI ships with a handy build command which will generate a 
highly-optimized production build.

