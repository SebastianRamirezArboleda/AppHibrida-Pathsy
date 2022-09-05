const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleansCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

sass.compiler = require('dart-sass');

function js(){
    return src(['./js/index.js','./js/login.js','./js/Conductor.js','./js/Pasajero.js','./js/creditos.js','./js/seleccionarrol.js', './js/ConfirmacionViaje.js'])
            .pipe(concat("main.min.js"))
            .pipe(uglify())
            .pipe(dest('./js'));
}

function css(){
    return src("./sass/**/*.scss")
            .pipe(sass())
            .pipe(cleansCSS())
            .pipe(rename('main.min.css'))
            .pipe(dest("./css"))
            .pipe(dest("./www/css"));
}

exports.css = css;
exports.js = js;
