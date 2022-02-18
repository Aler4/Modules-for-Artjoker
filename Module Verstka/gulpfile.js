
const { src, dest, parallel, series, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));

const concat = require('gulp-concat');

const autoprefixer = require('gulp-autoprefixer');
 
const cleancss = require('gulp-clean-css');

const browserSync = require('browser-sync').create();

const imagecomp = require('compress-images');

const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');



function browse() {
	
	browserSync.init({
		server: {baseDir: 'app/'},
		notify: false,
		online: true,
	})
};

function ts_compile(){
   return  tsProject.src()
            .pipe(tsProject()).js
            .pipe(dest("app/js"))
            .pipe(browserSync.stream());

};

function styles() {
	return src('app/scss/*.scss') 
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) 
	.pipe(cleancss( { level: { 1: { specialComments: 0 } } } ))
	.pipe(dest('app/css/'))
	.pipe(browserSync.stream());
};

function build() {
	return src([
		'app/css/**/*min.css',
		'app/images/dest/**',
		'app/js/**',
		'app/*.html',
		], { base: 'app'})
	.pipe(dest('dist'));
}

async function images() {
	imagecomp(
		"app/images/src/**/*.{jpg,JPG,jpeg,JPEG,png,gif}",
		"app/images/dest/", 
		{ compress_force: false, statistic: true, autoupdate: true }, false, 
		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } },
		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
		{ svg: { engine: "svgo", command: "--multipass" } },
		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
		function (err, completed) {
			if (completed === true) {
				browserSync.reload()
			}
		}
	)
};



function startwatch() {
 
	watch('app/**/*.scss', styles);
	watch(['app/**/*.ts'], ts_compile);
	watch('app/images/src/**/*', images);
	watch('app/*.html').on('change', browserSync.reload);
};


exports.browse = browse;
exports.styles = styles;
exports.images = images;
exports.ts_compile = ts_compile;
exports.startwatch = startwatch;

exports.build = series(styles, ts_compile, images, build);
exports.default = parallel(styles, images,ts_compile, startwatch, browse);
