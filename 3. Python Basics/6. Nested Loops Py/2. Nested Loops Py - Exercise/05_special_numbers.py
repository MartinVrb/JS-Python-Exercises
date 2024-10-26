my_num = int(input())

for num in range(1111, 9999 + 1):
    counter = 0
    for special in str(num):
        if int(special) == 0:
            break
        elif my_num % int(special) == 0:
            counter += 1

        if counter == 4:
            print(num, end=" ")
