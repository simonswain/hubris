module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var less_src = ['less/**/*.less'];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/css/*'],
    less: {
      development: {
        files: {
          'dist/css/style.css': less_src
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          'dist/css/style.min.css': less_src
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dist', ['clean','less']);

  grunt.registerTask('default', ['less']);

};
