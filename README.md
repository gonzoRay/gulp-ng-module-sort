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
|——— src/
|   |——— app/
|       |——— module1/
|           |——— sub-module1/
|               |——— sub-module1.js
|           |——— module1.js
|       |——— module2/
|           |——— sub-module2/
|               |——— sub-module2.js
|           |——— sub-module3/
|               |——— sub-module3.js
|           |——— module2.js
|   |——— app.js
```

Where `app.js` is the root Angular module used in `ng-app`.