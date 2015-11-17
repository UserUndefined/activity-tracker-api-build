"use strict";

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        env: {
            test: { NODE_ENV: 'test' }
        },
        cafemocha: {
            test: {
                src: 'test/{,**/}*.js',
                options: {
                    ui: 'bdd',
                    reporter: 'spec'
                }
            }
        },
        jsonlint: {
            src: [ 'config/{,**/}*.json' ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'app/{,**/}*.js',
                'test/{,**/}*.js'
            ],
            ci: {
                src: '<%= jshint.all %>',
                options: {
                    reporter: 'checkstyle',
                    reporterOutput: 'reports/jshint.xml'
                }
            }
        }
    });

    grunt.registerTask('test', [
        'jsonlint',
        'jshint:all',
        'env:test',
        'cafemocha:test'
    ]);

};
