module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['browserify', 'uglify', 'sass-compile']);
    grunt.registerTask('live', ['browserify', 'uglify' ,'sass-compile', 'express', 'open', 'watch'])
    grunt.registerTask('sass-compile', ['concat', 'sass'])

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'main.min.js': ['main.js']
                }
            }
        },
        browserify: {
            options: {
                transform: ['reactify'],
                extension: ['.jsx'],
                debug: true,
                cache: {},
                packageCache: {},
                fullPaths: true
            },
            main: {
                src: ['src/*.js'],
                dest: 'main.js'
            }
        },
        concat: {
            dist: {
                src: [
                    'sass/resources/**/*.scss',
                ],
                dest: 'sass/build.scss',
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: true,
                    trace: true,
                    style: 'compressed',
                    sourceComments: false
                },
                files: {
                    'style.css': 'sass/build.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['./src/**'],
                tasks: ['browserify'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass-compile']
            }
        },
        express: {
            all: {
                options: {
                    bases: [__dirname],
                    port: 8088,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },
        open: {
            build: {
                path: 'http://localhost:8088'
            },
            file: {
                path: __dirname + '/index.html'
            }
        }
    });
};