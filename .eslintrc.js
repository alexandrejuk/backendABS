module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "est"
    ],
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "node": true
    },
    "rules": {
        "semi": [2, "never"],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["t"] }]
    }
}