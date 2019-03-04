/**
 * @fileoverview disallow defining variables name 'process' so there is no conflict with node.js global 'process'
 * @author no-def-process
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "disallow defining variables name 'process' so there is no conflict with node.js global 'process'",
      category: "Errors",
      recommended: true,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function(context) {
    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      VariableDeclarator: function(node) {
        const ans = context.getAncestors();
        const parent = ans[ans.length - 1];
        if (parent && parent.type === "VariableDeclaration") {
          const invalid =
            node.id &&
            node.id.type === "Identifier" &&
            node.id.name === "process";
          if (invalid) {
            context.report({
              node,
              message:
                "'process' is reserved for node.js, it cannot be defines as a variable",
            });
          }
        }
      },
    };
  },
};
