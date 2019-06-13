var gulp = require('gulp');
var rename=require('gulp-rename'); // подключение модуля rename
var sass=require('gulp-sass'); // подключаем sass
var autoprefixer = require('gulp-autoprefixer');


function style(done){
    return gulp.src("./app/scss/**/*.scss")
    .pipe(sass({ // вызов sass
        errLogToConsole:true // вызов ошибок в консоль
    }))
    .on('error', console.error.bind(console)) //обработчик ошибок
    .pipe(autoprefixer({
        browsers: ['last 1 firefox version'],
        cascade: false
    }))
    .pipe(rename('style.css')) //переименовать в файл
    .pipe(gulp.dest('./app/css/')); // куда копировать
    done();
}


exports.default=style; // синтаксис gulp.4 (функция по-умолчанию)
gulp.task(style); //синтаксис gulp.3
gulp.task("start", function(){
    gulp.watch("app/scss/**/*.scss", gulp.series('style'));
    
});
