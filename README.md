# grunt-init-myapp

> Create a new WebApp files with [grunt-init][], including LESS with LESSHAT mixins and RequireJS + /server, watch, jshint, uglify and automatic open/.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation

```
git clone git@github.com:slinto/grunt-init-myapp.git ~/.grunt-init/myapp
```

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init myapp
npm install
```

## Workflow
### Dev-build
```
grunt
```
### Production-build
In production remove from index.html require.config and change data-main="assets/js/main" to data-main="assets/dist/main".
```
grunt build
```
### Start server and watching
```
grunt server
```