/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

http://ardalis.com/configure-grunt-in-visual-studio-2015

*/
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-bower-install-task');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var config = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },

        uglify: {
            my_target: {
                files: { 'wwwroot/app.js': ['Assets/app.js', 'Assets/**/*.js'] }
            }
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
        
        //bowercopy: {
        //    options: {
        //        srcPrefix: 'bower_components'
        //    },
        //    scripts: {
        //        options: {
        //            destPrefix: 'scripts/vendor'
        //        },
        //        files: {
        //            'jquery/jquery.js': 'jquery/jquery.js',
        //            'angular/angular.js': 'angular/angular.js'
        //        }
        //    }
        //}
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    // define tasks
    grunt.registerTask('default', ['bower:install', 'uglify', 'watch']);
    grunt.loadNpmTasks("grunt-bower-task");
};