module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    Concat and minify js
    uglify: {
      javascript: {
        files: {
          //build file
          'path to production js.min.js': 

          //source files
          ['*.js', 'or an array of paths to js files - array order will be respected in compression']
        }
      }
    },//end uglify task

    //Compile and minify Less files
    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "path to build destination": "path to less dev files"
        }
      }
    },

    //Minify compiled css
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: 'name of css build file',
        dest: 'css/',
        ext: '.min.css'
      }
    },

    watch: {
      //watch js files
      js: {
        files: ['path to js files you want to watch'],
        // tasks: ['uglify'],
      },
      options: {
        livereload: true,
      },
      //watch less files
      css: {
        files: ['path to less files you want to watch'],
        tasks: ['less:development', 'cssmin:minify'],
      },
      options: {
        livereload: true,
      },
      html: {
        files: ['path to html files you want to watch'],
      },
      options: {
        livereload: true,
      }
      // Livereload browser
  
    }//end watch task

  });// close grunt initconfig function

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  //Load the plugin that provides the "LESS" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  //Load the plugin that provides the "cssmin" task
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less', 'cssmin', 'watch']);

};