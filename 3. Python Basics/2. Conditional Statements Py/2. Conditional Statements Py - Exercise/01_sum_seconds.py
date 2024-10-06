first_time = int(input())
second_time = int(input())
third_time = int(input())

sum_of_times = first_time + second_time + third_time
minutes = sum_of_times // 60
second = sum_of_times % 60

print(f"{minutes}:{second:02d}")