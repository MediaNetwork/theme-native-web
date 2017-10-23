module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		cssmin: {
			prod: {
				files: {
					'css/theme.min.css': [
						'css/reset.css',
						'css/spn.css',
						'css/style.css',
						'css/responsive.css'
					]
				}
			}
		},
		uglify: {
			prod: {
				files: {
					'js/media.min.js': [
						'js/jquery-1.12.4.min.js',
						'js/spn.min.js',
						'js/media.js'
					],
					'js/list.min.js': [
						'js/jquery-1.12.4.min.js',
						'js/spn.min.js',
						'js/jquery.grid-a-licious.min.js',
						'js/list.js'
					],
					'js/social.min.js': [
						'js/social.js'
					],
					'js/sw.min.js': [
						'js/sw.js'
					]
				}
			}
		},
		watch: {
			scripts: {
				files: [
					'js/**/*.js',
					'!js/media.min.js',
					'!js/list.min.js',
					'!js/social.min.js',
					'!js/sw.min.js'
				],
				tasks: ['uglify'],
			},
			stylesheets: {
				files: [
					'css/**/*.css',
					'!css/theme.min.css'
				],
				tasks: ['cssmin'],
			},
		}
	});

	grunt.registerTask('default', ['prod', 'watch']);

	grunt.registerTask('prod', ['cssmin', 'uglify']);
};
