/**
 * Created by jose.soria on 06/16/2015.
 */
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: '**/*.html'
      },
      js: {
        files: '**/*.js'
      },
      css: {
        files: '**/*.css'
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
          open: {
            target: 'http://localhost:8000/',
            appName: 'Firefox',
          }
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('server', "Serve your app", [
    'connect:server', 'watch']);

};