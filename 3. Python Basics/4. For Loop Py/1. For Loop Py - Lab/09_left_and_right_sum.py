numbers_count = int(input())

count = 0
left_sum = 0
right_sum = 0

for _ in range(numbers_count):
    first_current_num = int(input())
    left_sum += first_current_num

for _ in range(numbers_count):
    second_current_num = int(input())
    right_sum += second_current_num

if left_sum == right_sum:
    print(f"Yes, sum = {left_sum}")
else:
    diff = abs(left_sum - right_sum)
    print(f"No, diff = {diff}")
