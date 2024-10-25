start_num, end_num = int(input()), int(input())

for first_num in range(start_num, end_num + 1):
    even_positions_sum, odd_positions_sum = 0, 0

    for idx, digit in enumerate(str(first_num)):
        # The index is 0, even number, but the position of the number is odd. It is so by condition.
        if idx % 2 == 0:
            odd_positions_sum += int(digit)
        else:
            even_positions_sum += int(digit)

    if even_positions_sum == odd_positions_sum:
        print(first_num, end=" ")
