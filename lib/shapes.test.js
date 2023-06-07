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
// Describe block for the Circle class
    describe('Circle', () => {
        // Test case for the Circle class - include message of what should pass
        it('Circle render method returns correct SVG string', () => {
            // Create an instance with a new circle with the color 'blue'
            const circle = new Circle('blue');
            // Expected svg string for a blue circle
            const expectedSvg = '<circle cx="50" cy="50" r="50" fill="blue" />';
            // Use render method of the triangle instance that should be equal to expectedSvg
            expect(circle.render()).toEqual(expectedSvg);
        });
    })
});
