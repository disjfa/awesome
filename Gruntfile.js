module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
      },
      pages: {
        options: {
          remote: 'git@github.com:disjfa/awesome.git',
          branch: 'gh-pages',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-build-control');
  grunt.registerTask('push', ['buildcontrol:pages']);
};
