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
		return gulp.src('./src/app/**/*.js')
		.pipe(ngModuleSort())
		.pipe(concat('scripts.js))
		.pipe(gulp.dest('./dist/));
	});

```

CONVENTION
-------------------

Assumes this directory structure convention:

```
|--- src/
|   |--- app/
|       |--- foo-module/
|           |--- sub-module-foo/
|               |--- sub-module-foo.js
|           |--- foo-module.js
|       |--- bar-module/
|           |--- sub-module-bar/
|               |--- sub-module-bar.js
|           |--- bar-module.js
```