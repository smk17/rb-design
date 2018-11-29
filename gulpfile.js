var path = require("path");
var gulp = require("gulp");
var merge = require("merge2");
var less = require("gulp-less");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var gutil = require("gulp-util")
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");
var LessAutoprefix = require("less-plugin-autoprefix");
var tsProject = ts.createProject("tsconfig.json");
var autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });

gulp.task("less", function() {
  return gulp
    .src("./src/**/*.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")],
        plugins: [autoprefix]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"));
});

gulp.task("tsc", function() {
  return (tsResult = tsProject
    .src()
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    .on("error", function(err) {
      gutil.log(gutil.colors.red("[Error]"), err.toString());
    })
    .pipe(tsProject())
    .pipe(sourcemaps.write(".", { sourceRoot: "./", includeContent: false }))
    .pipe(gulp.dest("dist")));
});

gulp.task("default", ["tsc", "less"]);
