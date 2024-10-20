from sys import maxsize

numbers_count = int(input())
max_num = -maxsize
final_sum = 0

for i in range(numbers_count):
    current_num = int(input())

    if current_num > max_num:
        max_num = current_num

    final_sum += current_num

final_sum_without_max_num = final_sum - max_num

if max_num == final_sum_without_max_num:
    print("Yes")
    print(f"Sum = {final_sum_without_max_num}")
else:
    diff = abs(final_sum_without_max_num - max_num)
    print("No")
    print(f"Diff = {diff}")
