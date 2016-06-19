module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
            src: ['js/*.js'],
            dest: 'js/production.js',
          }
        },
        uglify: {
          js: {
            src: 'js/production.js',
            dest: 'js/production.min.js'
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);

};
