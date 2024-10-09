from math import pi

figure = input()
area = 0

if figure == "square":
    square_side = float(input())
    area = square_side * square_side
elif figure == "rectangle":
    rectangle_first_side = float(input())
    rectangle_second_side = float(input())
    area = rectangle_first_side * rectangle_second_side
elif figure == "circle":
    radius = float(input())
    area = pi * radius ** 2
else:
    triangle_side = float(input())
    height = float(input())
    area = (triangle_side * height) / 2

print(f"{area:.3f}")