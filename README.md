# eslint-plugin-insights-omni-eslint

Custom rules for Insights Omni

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-insights-omni-eslint`:

```
$ npm install eslint-plugin-insights-omni-eslint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-insights-omni-eslint` globally.

## Usage

Add `insights-omni-eslint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "insights-omni-eslint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "insights-omni-eslint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





