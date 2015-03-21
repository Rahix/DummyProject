/*
 * Grunt-configuration
 */

module.exports = function(grunt) {
  
  // Set grunt configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    clean: {
      dist: 'dist/*'
    },
    
    concat: {
      js: {
        src: ['js/game/*.js', 'js/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      css: {
        src: ['style/*'],
        dest: 'dist/style/<%= pkg.name %>.css'
      }
    },
    
    uglify: {
      js: {
        src: 'dist/js/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },
    
    cssmin: {
      dist: {
        src: 'dist/style/<%= pkg.name %>.css',
        dest: 'dist/style/<%= pkg.name %>.min.css'
      }
    },
    
    htmlmin: {
      core: {
        src: 'index.html',
        dest: 'dist/index.html'
      }
    },
    
    copy: {
      img: {
        src: 'img/*',
        dest: 'dist/'
      }
    },
    
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: [
            'js/game/mapstorage.js'
          ]
        },
        src: ['js/game/test/*.js']
      }
    }
  });
  
  // Load Modules
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  
  // Register tasks
  grunt.registerTask('default', ['clean:dist', 'concat:js', 'uglify:js', 'concat:css', 'cssmin:dist', 'htmlmin:core', 'copy:img']);
  
  grunt.registerTask('test', ['mochaTest']);
}