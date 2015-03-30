INFORMATION
-------------------
<table>
<tr>
<td>Package</td><td>gulp-ng-module-sort</td>
</tr>
<tr>
<td>Description</td>
<td>Sorts AngularJS files in a given directory(s) in preparation for script concatenation.</td>
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

	gulp.task('angular-scripts', function() {
		return gulp.src('./lib/*.js')
		.pipe(ngModuleSort())
		.pipe(concat('scripts.js))
		.pipe(gulp.dest('./dist/));
	});

```

CONVENTION
-------------------

Assumes this directory convention:

Directory structure:
```
|--- src/
|   |--- app/
|       |--- module/
|           |--- sub-module/
|               |--- sub-module.js
|           |--- module.js
```