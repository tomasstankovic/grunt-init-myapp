'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'www/assets/js/.jshintrc'
        },
        src: ['www/assets/js/**/*.js']
      },
    },

    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "www/assets/js",
          out: "www/assets/dist/prod_build.js",
          optimize: "uglify2"
        }
      }
    },

    less: {
      dev: {
        files: {
          "www/assets/css/style.css": "www/assets/css/index.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "www/assets/css/style.css": "www/assets/css/index.less"
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      src: {
        files: ['www/assets/js/**/*.js', 'www/assets/css/**/*.less','www/*.html', 'Gruntfile.js'],
        tasks: ['default'],
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'www',
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
