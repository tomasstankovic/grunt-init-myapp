/*
 * grunt-init-myapp
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Slinto - Tomas Stankovic
 * www.slinto.sk
 * @TomasStankovic
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a new WebApp including LESS and RequireJS.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'HELLO! Let\'s build better internet! \nThis is webApp template ' +
  'LESS with LESSHAT mixins, RequireJS with r.js optimizer, jshint and livereloading /+ server/';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Done! \nHappy Coding!';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'myapp'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description', 'My app description'),
    init.prompt('version', '0.0.1'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function(err, props) {

    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'assets/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: 'init-myapp',
      version: '0.0.1',
      node_version: '>= 0.10.x',
      devDependencies: {
        "grunt": "0.4.x",
        "grunt-open": "0.2.x",
        "grunt-contrib-less": "0.6.x",
        "grunt-contrib-watch": "0.4.x",
        "grunt-contrib-jshint": "0.6.x",
        "grunt-contrib-connect": "0.3.x",
        "grunt-contrib-requirejs": "0.4.x"
      },
    });

    // All done!
    done();
  });

};
