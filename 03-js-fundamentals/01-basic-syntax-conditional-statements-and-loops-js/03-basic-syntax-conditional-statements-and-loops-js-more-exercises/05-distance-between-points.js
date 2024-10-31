function distanceBetweenPoints(x1, y1, x2, y2) {

    let dx = x2 - x1;
    let dy = y2 - y1;

    let distance = Math.sqrt(dx ** 2 + dy ** 2);

    console.log(distance);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);