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
            src: 'js/production.js',
            dest: 'js/production.min.js'
        },
        sass: {
          dist: {
            files: [{
              expand: true,
              cwd: 'styles',
              src: ['*scss'],
              dest: 'css',
              ext: 'main.css'
            }]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};
