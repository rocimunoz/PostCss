module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);

  grunt.initConfig({
   cssnano: {
        options: {
            sourcemap: true
        },
        dest: {
            files: {
                'dest/style.css': 'src/style.css'
            }
        }
    }
  });
  
grunt.registerTask('default', ['cssnano']);  
};
  