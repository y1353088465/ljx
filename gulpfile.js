var gulp = require('gulp');

// 新建任务sass

var rubysass=require('gulp-ruby-sass');

gulp.task('sass',function(){
    return rubysass('./sass/*.scss').pipe(gulp.dest('./css'));
})

//进行监听

gulp.task('watch',function(){
    gulp.watch('./sass/*.scss',['sass']);
})
