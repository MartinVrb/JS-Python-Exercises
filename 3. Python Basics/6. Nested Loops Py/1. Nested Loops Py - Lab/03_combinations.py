my_num = int(input())
solutions = 0

for first_num in range(my_num + 1):
    for second_num in range(my_num + 1):
        for third_num in range(my_num + 1):
            result = first_num + second_num + third_num
            if result == my_num:
                solutions += 1

print(solutions)
