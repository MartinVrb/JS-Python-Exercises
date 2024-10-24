my_num = int(input())
counter = 0

for rows in range(1, my_num + 1):
    for _ in range(1, rows + 1):
        counter += 1
        print(counter, end=" ")
        if counter == my_num:
            exit()
    print()
