INFORMATION
-------------------
<table>
<tr>
<td>Package</td><td>gulp-concat</td>
</tr>
<tr>
<td>Description</td>
<td>Concatenates files</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

DESCRIPTION
-------------------
The gulp-ng-module-sort module is intended to be used to order AngularJS modules for inclusion in a concatenation routine such as gulp-concat. This module assumes a directory stucture where the module.js file lives directly under a matching directory.

USAGE
------------------
```js
	var ngModuleSort = require('gulp-ng-module-sort');

	gulp.task('scripts', function() {
		return gulp.src('./lib/*.js')
		.pipe(ngModuleSort())
		.pipe(concat('scripts.js))
		.pipe(gulp.dest('./dist/));
	});

```

