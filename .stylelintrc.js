module.exports = {
  extends: [
    'stylelint-config-sass-guidelines'
  ],
  rules: {
    // Allow @use instead of @import
    'scss/no-global-function-names': null,
    // Allow math.div() function
    'scss/at-function-pattern': null,
    // Allow nested selectors for flexbox grid utility classes
    'max-nesting-depth': 5,
    // Allow longer selector names for utility classes
    'selector-max-compound-selectors': 5,
    // Allow vendor prefixes for flex properties (for IE11 compatibility)
    'property-no-vendor-prefix': null,
    // Allow long lines for grid template areas (rule doesn't exist in stylelint)
    // 'max-line-length': null,
    // Allow important declarations for utility classes
    'declaration-no-important': null,
    // Allow double quotes for consistency with existing code
    '@stylistic/string-quotes': null,
    // Allow flexible indentation for generated code
    '@stylistic/indentation': null
  }
};