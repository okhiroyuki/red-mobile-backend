module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      src: [
        "www/assets/",
        "www/css/",
        "www/js",
        "www/img/",
        "www/*.html",
        "www/*.icon",
      ],
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "dist/",
            src: ["**"],
            dest: "www/",
          },
        ],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("build", "Builds content", ["clean", "copy"]);
  grunt.registerTask("release", "Builds content", ["clean", "copy"]);
};
