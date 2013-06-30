# grunt-init-myapp

> Create a new WebApp files with [grunt-init][], including LESS with LESSHAT mixins, RequireJS with r.js optimizer, jshint and livereloading /+ server/.

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

### Recomended dev workflow
With watch and livereloading
```
grunt watch
```

### Server with watch and livereloading
Default on localhost:9000
```
grunt server
```

### Default task
```
grunt
```

### Production-build
In production remove 'DEV USE' section and uncomment 'PRODUCTION USE' html code
```
grunt build
```