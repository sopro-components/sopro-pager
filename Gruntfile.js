/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    /*
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    */
    jade: {
      compile: {
        src: ['*.jade'],
        dest: ['*.html']
      }
    }
  });

  // These plugins provide necessary tasks.
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task.
  grunt.registerTask('default', ['jade:compile']);

};