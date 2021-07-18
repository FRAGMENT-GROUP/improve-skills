# Improve skills

## Guideline 
- [git-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [airbnb-base](https://github.com/airbnb/javascript)

## How to write tests and pass all github actions
- you must create directory where you will be working
- move your solution to the directory
- create ```task_name.test.js``` for the jest test
- create ```task_name.mocha.js``` for the mocha test 

### Tests Example
* sum.js
    ```javascript
    module.exports = (arr) => arr.reduce((a, b) => a + b);
    ```
* sum.test.js
    ```javascript
    const sum = require('./sum');

    describe('simple tests', () => {
        it('should return 3', () => {
            expect(sum([1, 2])).toBe(3);
        });
    });
    ```
* sum.mocha.js
    ```javascript
    const assert = require('assert');
    const sum = require('./sum');
    
    describe('simple tests', () => {
        it('should return 3', () => {
            assert.strictEqual(sum([1, 2]), 3);
        });
    });
    ```