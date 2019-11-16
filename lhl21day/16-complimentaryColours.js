/*
Instructions
We'll complete a function festivalColours() that calculates the split complementary colours 
for a given colour. We'll be working with a special colour system called HSL, which stands 
for Hue, Saturation, and Lightness.

Here's an example of an HSL colour picker.

The function will receive an H(Hue) value, and must return an array of the values for the 
two split complementary colours. The smaller number should be the first element, and the 
larger number should be the second element.

You can take a peek at this website for the formula you'll need to use to calculate the 
split complementary colours:

https://www.ethangardner.com/articles/2009/03/15/a-math-based-approach-to-color-theory-using-hue-saturation-and-brightness-hsb/#split-complementary

Examples
Input:

const color1 = 100

Output:
[250, 310]

*/

const festivalColours = color1 => {
  let comp1 = color1 + 150;
  let comp2 = color1 + 210;

  comp1 = comp1 > 360 ? comp1 - 360 : comp1;
  comp2 = comp2 > 360 ? comp2 - 360 : comp2;
  return [comp1, comp2];
};
