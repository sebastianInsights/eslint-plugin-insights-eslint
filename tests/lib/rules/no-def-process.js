/**
 * @fileoverview disallow defining variables name &#39;process&#39; so there is no conflict with node.js global &#39;process&#39;
 * @author no-def-process
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-def-process"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

var ruleTester = new RuleTester();
ruleTester.run("no-def-process", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const test = {};",
  ],

  invalid: [
    {
      code: "const process = {};",
      errors: [
        {
          message:
            "'process' is reserved for node.js, it cannot be defines as a variable",
          type: "VariableDeclaration",
        },
      ],
    },
  ],
});
