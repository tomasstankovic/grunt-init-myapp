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

    uglify: {
      options: {
        report: "min"
      },
      glob_to_multiple: {
        expand: true,
        cwd: 'assets/js/',
        src: ['**/*.js'],
        dest: 'assets/dist/',
        ext: '.js'
      }
    },

    less: {
      dev: {
        files: {
          "assets/css/style.css": "assets/less/index.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "assets/css/style.css": "assets/less/index.less"
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      src: {
        files: ['assets/js/**/*.js', 'assets/less/**/*.less', 'Gruntfile.js'],
        tasks: ['default'],

      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: '.'
        }
      }
    },

    open: {
      server: {
        url: 'http://localhost:<%= connect.server.options.port %>'
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Tasks definition.
  grunt.registerTask('default', ['jshint:gruntfile', 'jshint:src', 'less:dev' ]);
  grunt.registerTask('build', ['jshint:gruntfile', 'jshint:src', 'uglify', 'less:production' ]);
  grunt.registerTask('server', ['connect', 'open', 'watch' ]);

};
