/*
Instructions
Each shape has a different calculation for determining volume, so we'll need to create a few 
functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth

The fourth function, totalVolume(), will receive an array containing the different shapes 
that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

Don't worry about getting the answers to the perfect precision: our tests will check to see 
that you're within a correct range.

Examples
Input:

    const sphere = {
      type: 'sphere',
      radius: 2
    }

    sphereVolume(sphere.radius)
    
Output:
33.5102
Input:

    const cone = {
      type: 'cone',
      radius: 3,
      height: 5
    }

    coneVolume(cone.radius, cone.height)
    
Output:
47.12385
Input:

    const prism = {
      type: 'prism',
      height: 3,
      width: 4,
      depth: 5
    }

    prismVolume(prism.height, prism.width, prism.depth)
    
Output:
60
Input:

    const largeSphere = {
      type: 'sphere',
      radius: 40
    }

    const smallSphere = {
      type: 'sphere',
      radius: 10
    }

    const cone = {
      type: 'cone',
      radius: 3,
      height: 5
    }

    const duck = [
      largeSphere,
      smallSphere,
      cone
    ]

    totalVolume(duck)
    
Output:
272318.257

*/

const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

const coneVolume = function(radius, height) {
  return (PI * Math.pow(radius, 2) * height) / 3;
};

const prismVolume = function(height, width, depth) {
  return height * width * depth;
};

const totalVolume = function(solids) {
  let totalVolume = 0;
  //console.log(solids)
  for (let shape of solids) {
    totalVolume +=
      shape.type === "sphere"
        ? sphereVolume(shape.radius)
        : shape.type === "cone"
        ? coneVolume(shape.radius, shape.height)
        : prismVolume(shape.height, shape.width, shape.depth);
  }
  return totalVolume;
};
