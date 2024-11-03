function triangleArea(a, b, c) {

    let perimeter = a + b + c;
    let halfPerimeter = perimeter / 2;

    let triangleArea = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));

    console.log(triangleArea);

}
triangleArea(2, 3.5, 4);