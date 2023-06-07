// Import each shape from shapes.js
const { Triangle, Circle, Square } = require('./shapes');

// Describe block for the whole suite
describe('Shape Testing Suite', () => {
    // Describe block for the Triangle class
    describe('Triangle', () => {
        // Test case for the Triangle class - include message of what should pass
        it('Triangle render method returns correct SVG string', () => {
        // Creates an instance with a new triangle with the color 'red'
        const triangle = new Triangle('red');
        // Expected svg string for a red triangle
        const expectedSvg = '<polygon points="0,0 0,100 100,0" fill="red" />';
        // Use render method of the triangle instance that should be equal to expectedSvg
        expect(triangle.render()).toEqual(expectedSvg);
      });
})
});
