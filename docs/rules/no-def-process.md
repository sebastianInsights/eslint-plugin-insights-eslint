# disallow defining variables name &#39;process&#39; so there is no conflict with node.js global &#39;process&#39; (no-def-process)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

const process = {};
var process = {};
let process = {};

```

Examples of **correct** code for this rule:

```js

const test = {};
var test = {};
let test = {};

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
