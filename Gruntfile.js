module.exports = function(grunt) {

    var BUILD_DIR = 'public/',
        SOURCE_DIR = 'public/';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= pkg.version %>  / <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: [
                SOURCE_DIR + 'js/vendor/modernizr-2.6.2.min.js',
                SOURCE_DIR + 'js/app/**/*.js',
                SOURCE_DIR + 'js/main.js'
            ],
            dest: BUILD_DIR + 'js/scripts.min.js'
          }
        },
        cssmin: {
            combine: {
                files: {
                    'public/css/styles.min.css': [
                        SOURCE_DIR + 'css/normalize.css',
                        SOURCE_DIR + 'css/base.css',
                        SOURCE_DIR + 'css/main.css'
                    ]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);

};