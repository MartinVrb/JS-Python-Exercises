numbers_count = int(input())
final_sum = 0

for num_in_row in range(numbers_count):
    current = int(input())
    final_sum += current

print(final_sum)
