


module.exports = function(grunt){

	// Project configuration.
grunt.initConfig({
  concat: {
     js: {
      src: ['js/app.js',  'js/app.min.js'],
      dest: 'api-styles/js/yt-script-api.js',
    },
     css: {
      src: ['css/style.css',  'css/style.min.css'],
      dest: 'api-styles/css/yt-css-api.css',
    },
  },
  watch: {
   js: {
    files: ['js/**/*.js'],
    tasks: ['concat'],
    },
   css: {
    files: ['css/**/*.css'],
    tasks: ['concat'],
    },
},
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat', 'watch']);
};
