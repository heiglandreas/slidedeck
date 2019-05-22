# Generated on 2018-10-23 using generator-bitexpert-slidedeck 0.2.4
module.exports = (grunt) ->

    grunt.loadNpmTasks('grunt-symbolic-link')

    getPath =() ->
        paths = grunt.file.readJSON 'talks.json'
        (paths[grunt.option('talk')] || '.') + '/'

    path = getPath()
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        watch:

            livereload:
                options:
                    livereload: true
                files: [
                    'index.html'
                    'slides/{,*/}*.{md,html}'
                    'js/*.js'
                    'css/*.css'
                    'resources/**'
                ]

            index:
                files: [
                    'templates/_index.html'
                    'templates/_section.html'
                    'slides/list.json'
                    'slides/config.json'
                ]
                tasks: ['buildIndex']

            coffeelint:
                files: ['Gruntfile.coffee']
                tasks: ['coffeelint']

            jshint:
                files: ['js/*.js']
                tasks: ['jshint']

            sass:
                files: ['css/source/theme.scss']
                tasks: ['sass']

        symlink:

            slides:
                target: path + 'slides'
                link: 'slides'
                options:
                    overwrite: true
            img:
                target: path + 'resources'
                link: 'resources'
                options:
                    overwrite: true

        sass:

            theme:
                files:
                    'css/theme.css': 'css/source/theme.scss'

        connect:

            livereload:
                options:
                    port:19000
                    # Change hostname to '0.0.0.0' to access
                    # the server from outside.
                    hostname: 'localhost'
                    base: '.'
                    open: true
                    livereload: true

        coffeelint:

            options:
                indentation:
                    value: 4
                max_line_length:
                    level: 'ignore'

            all: ['Gruntfile.coffee']

        jshint:

            options:
                jshintrc: '.jshintrc'

            all: ['js/*.js']

        copy:

            dist:
                files: [{
                    expand: true
                    src: [
                        'slides/**'
                        'bower_components/**'
                        'js/**'
                        'css/*.css'
                        'resources/**'
                        'img/**'
                    ]
                    dest: 'dist/'
                },{
                    expand: true
                    src: ['index.html']
                    dest: 'dist/'
                    filter: 'isFile'
                }]

    # Load all grunt tasks.
    require('load-grunt-tasks')(grunt)

    grunt.registerTask 'buildIndex',
        'Build index.html from templates/_index.html and slides/list.json.',
        ->
            path = getPath()
            indexTemplate = grunt.file.read 'templates/_index.html'
            sectionTemplate = grunt.file.read 'templates/_section.html'
            slides = grunt.file.readJSON path + 'slides/list.json'
            config = grunt.file.readJSON 'slides/config.json'

            html = grunt.template.process indexTemplate, data:
                slides:
                    slides
                config:
                    config
                section: (slide) ->
                    grunt.template.process sectionTemplate, data:
                        slide:
                            slide

            grunt.file.write 'index.html', html

    grunt.registerTask 'test',
        '*Lint* javascript and coffee files.', [
            'coffeelint'
            'jshint'
        ]

    grunt.registerTask 'serve',
        'Run presentation locally and start watch process (living document).', [
            'symlink'
            'buildIndex'
            'sass'
            'connect:livereload'
            'watch'
        ]

    grunt.registerTask 'dist',
        'Save presentation files to *dist* directory.', [
            'symlink'
            'test'
            'sass'
            'buildIndex'
            'copy'
        ]



    # Define default task.
    grunt.registerTask 'default', [
        'test'
        'serve'
    ]


