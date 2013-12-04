/*
 * grunt-init-myapp
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Slinto - Tomas Stankovic
 * info@slinto.sk
 * @TomasStankovic
 * Licensed under the MIT license.
 */

'use strict';

exports.description = 'Create a new WebApp including LESS and RequireJS.';

exports.notes = 'HELLO! Let\'s build better internet! \nThis is webApp template ' +
  'LESS with LESSHAT mixins, RequireJS with r.js optimizer, jshint and livereloading /+ server/';

exports.after = 'Done! \nHappy Coding!';
exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  init.process({type: 'myapp'}, [
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version', '0.0.1'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function(err, props) {

    props.keywords = [];
    var files = init.filesToCopy(props);
    init.addLicenseFiles(files, props.licenses);
    init.copyAndProcess(files, props, {noProcess: 'www/assets/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: props.name,
      version: props.version,
      node_version: '>= 0.10.x',
      devDependencies: {
        "grunt": "0.4.x",
        "grunt-contrib-less": "0.8.x",
        "grunt-contrib-watch": "0.5.x",
        "grunt-contrib-jshint": "0.7.x",
        "grunt-contrib-connect": "0.5.x",
        "grunt-contrib-requirejs": "0.4.x"
      }
    });

    // Generate bower.json file, used by bower.
    init.writePackageJSON('bower.json', {
      name: props.name,
      version: props.version,
      dependencies: {
        "lesshat": "https://github.com/csshat/lesshat.git",
        "normalize-css": "git://github.com/necolas/normalize.css.git"
      }
    });

    // All done!
    done();
  });

};
