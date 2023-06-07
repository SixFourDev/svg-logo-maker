// Created Shape class
class Shape {
    // Defines constructor method and takes in color param
    constructor(color) {
      this.color = color;
    }
    // Render method to overide child classes and returns empty string
    render() {
      return '';
    }
  }
  
  // Created Triangle class that inherits Shape class
  class Triangle extends Shape {
    // Render overides Shape's render and returns a SVG string representing a triangle and a color
    render() {
      return `<polygon points="0,0 0,100 100,0" fill="${this.color}" />`;
    }
  }
  
  // Created Circle class that inherits Shape class
  class Circle extends Shape {
    // Render overides Shape's render and returns a SVG string representing a circle and a color
    render() {
      return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
  }
  
  // Created Square class that inherits Shape class
  class Square extends Shape {
    // Render overides Shape's render and returns a SVG string representing a square and a color 
    render() {
      return `<rect x="0" y="0" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  // Exports classes to allow us to grab from another file
  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
  };  
  