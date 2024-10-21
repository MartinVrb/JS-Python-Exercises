start_num = int(input())
sum_numbers = 0

while True:
    numbers = int(input())
    sum_numbers += numbers
    if sum_numbers >= start_num:
        print(sum_numbers)
        break
