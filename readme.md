# Koality Flexbox Grid

This aims to be a very simple Sass flexbox grid that isn't overly complicated or ends up being something you fight against while building.

## How to use

You can get this project into like any node package: `npm install koality-flexbox-grid`

Then in your projects sass you will want to import it like `@import `node_modules/koality-flexbox-grid/src/scss/flexbox-grid`. In doing that you can override some variables.

## Classes

### Container Classes

* `flex-container`: adding that class to any element simply applies a `display: flex` to it.
* `flex-wrap`
* `flex-nowrap`
* `flex-wrap-reverse`
* `flex-row` or `flex-dir-row`
* `flex-dir-row-reverse`
* `flex-column` or `flex-dir-column`
* `flex-dir-column-reverse`
* `flex-jc-flex-start`
* `flex-jc-flex-end`
* `flex-jc-center`
* `flex-jc-space-between`
* `flex-jc-space-around`
* `flex-jc-space-evenly`
* `flex-ai-flex-start`
* `flex-ai-flex-end`
* `flex-ai-center`
* `flex-ai-stretch`
* `flex-ai-baseline`
* `flex-ac-flex-start`
* `flex-ac-flex-end`
* `flex-ac-center`
* `flex-ac-stretch`
* `flex-ac-space-between`
* `flex-ac-space-around`
* `flex-as-flex-end`
* `flex-as-center`
* `flex-as-baseline`
* `flex-as-stretch`

### Item Classes

* By default all items are `flex: 1 1 100%`
* To control the width of you item you have the class format of `flex-X-X` where you can put any number from 1-12. It should work like most common CSS frameworks where `flex-2-3` will make this item 66%.
* `flex-shrink-0`
* `flex-grow-0`
* `flex-grow-2`
* `flex-grow-3`
* `flex-grow-4`
* `flex-grow-5`

### Responsive Classes

All classes listed can be prefixed with any breakpoint name to make it work on that breakpoint and up.

#### Available Breakpoints

* `$default`: 0
* `$sm`: 576px
* `$md`: 768px
* `$lg`: 992px
* `$xl`: 1200px
* `
$breakpoints: (
  default: $default,
  sm: $sm,
  md: $md,
  lg: $lg,
  xl: $xl,
);
`

These can be overridden in your own project as long as you match the variable names. If you drop breakpoints from the `$breakpoints` sass map it will change the amount of breakpoints the Grid has, this will greatly reduce the amount of CSS the Grid uses.

Example:
`md-flex-dir-colmn`, `lg-flex-2-3`

### Row Classes

* `row`: will center the row and make it `$row-width (default 1400px)` and on screens smaller than it's width it will have gutters the width of `$gutter-width (default 15px)`
* `row-full` will be 100% width even able to break outside of a `row` and touch the edge of the screen
* `inner-row` same as row but only `$inner-row-width (default 800px)`

### Variables

As much as we can we try to allow things to be user overridable. Here are currently all the variables you can change.

* `$row-width: 1400px;`
* `$inner-row-width: 800px;`
* `$default: 0;`
* `$sm: 576px;`
* `$md: 768px;`
* `$lg: 992px;`
* `$xl: 1200px;`
* `
$breakpoints: (
  default: $default,
  sm: $sm,
  md: $md,
  lg: $lg,
  xl: $xl,
);
`
* `$gutter-width: 15px;`
* `$flex-grid-count: 12;` This will adjust the amount of columns in the grid.
* `$flex-grow-default: 0;` This will change wheither or not the grid items grow by default or not.
* `$flex-shrink-default: 1;` This will change wheither or not the grid items shrink by default or not.

### Demo
[See CodePen Example](https://codepen.io/fabean/pen/POerBX)

