numbers_count = int(input())

num1_sum = 0
num2_sum = 0
num3_sum = 0
num4_sum = 0
num5_sum = 0

for _ in range(numbers_count):
    current_num = int(input())

    if current_num < 200:
        num1_sum += 1
    elif current_num <= 399:
        num2_sum += 1
    elif current_num <= 599:
        num3_sum += 1
    elif current_num <= 799:
        num4_sum += 1
    else:
        num5_sum += 1

p1 = (num1_sum / numbers_count) * 100
p2 = (num2_sum / numbers_count) * 100
p3 = (num3_sum / numbers_count) * 100
p4 = (num4_sum / numbers_count) * 100
p5 = (num5_sum / numbers_count) * 100

print(f"{p1:.2f}%")
print(f"{p2:.2f}%")
print(f"{p3:.2f}%")
print(f"{p4:.2f}%")
print(f"{p5:.2f}%")
