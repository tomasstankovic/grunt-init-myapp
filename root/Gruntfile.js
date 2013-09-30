'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',

    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'assets/js/.jshintrc'
        },
        src: ['assets/js/**/*.js']
      },
    },

    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "assets/js",
          out: "assets/js/prod_build.js",
          optimize: "uglify2"
        }
      }
    },

    less: {
      dev: {
        files: {
          "assets/css/style.css": "assets/css/index.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "assets/css/style.css": "assets/css/index.less"
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      src: {
        files: ['assets/js/**/*.js', 'assets/css/**/*.less','*.html', 'Gruntfile.js'],
        tasks: ['default'],
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          open: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Tasks definition.
  grunt.registerTask('default', ['jshint:gruntfile', 'jshint:src', 'less:dev' ]);
  grunt.registerTask('build', ['jshint:gruntfile', 'jshint:src', 'requirejs', 'less:production' ]);
  grunt.registerTask('server', ['connect', 'watch' ]);

};
