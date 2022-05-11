function calculateTriangleArea(x, y) {
  return x * y / 2
}

function calculateRectangleArea(x, y) {
  return x * y
}

function calculateCircleArea(x) {
  return Math.PI * x * x
}

if (calculateRectangleArea.name === true)
  (function calculateRectangleArea(x, y) {
    return [x * y]
  })
if (calculateTriangleArea.name === true)
  (function calculateTriangleArea(x, y) {
    return [x * y / 2]
  })

else(function calculateCircleArea(x) {
  return [Math.PI * x * x]
})

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));
console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));
console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));
