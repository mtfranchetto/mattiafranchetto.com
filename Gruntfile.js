module.exports = function(grunt) {

    var BUILD_DIR = 'public/',
        SOURCE_DIR = 'client/';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: [
            BUILD_DIR + 'js',
            BUILD_DIR + 'css',
            BUILD_DIR + 'img',
            BUILD_DIR + 'templates',
            BUILD_DIR + '404.html',
            BUILD_DIR + 'apple-touch-icon.png',
            BUILD_DIR + 'favicon.ico',
            BUILD_DIR + 'humans.txt',
            BUILD_DIR + 'robots.txt',
            BUILD_DIR + 'sitemap.xml'
        ],
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
        },
        copy: {
          main: {
            files: [
              { expand: true, cwd: SOURCE_DIR, src: ['templates/**'], dest: BUILD_DIR },
              { expand: true, cwd: SOURCE_DIR, src: ['css/responsive.css'], dest: BUILD_DIR },
              { expand: true, cwd: SOURCE_DIR, src: ['img/**'], dest: BUILD_DIR },
              { expand: true, cwd: SOURCE_DIR, src: ['favicon.ico'], dest: BUILD_DIR},
              { expand: true, cwd: SOURCE_DIR, src: ['404.html'], dest: BUILD_DIR},
              { expand: true, cwd: SOURCE_DIR, src: ['apple-touch-icon.png'], dest: BUILD_DIR},
              { expand: true, cwd: SOURCE_DIR, src: ['humans.txt'], dest: BUILD_DIR},
              { expand: true, cwd: SOURCE_DIR, src: ['robots.txt'], dest: BUILD_DIR},
              { expand: true, cwd: SOURCE_DIR, src: ['sitemap.xml'], dest: BUILD_DIR}
            ]
          }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'copy']);

};