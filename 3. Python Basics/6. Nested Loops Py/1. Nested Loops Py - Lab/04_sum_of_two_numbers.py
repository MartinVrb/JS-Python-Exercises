start_number = int(input())
end_number = int(input())
magic_number = int(input())
combinations = 0
flag = False

for first_num in range(start_number, end_number + 1):
    for second_num in range(start_number, end_number + 1):
        result = first_num + second_num
        combinations += 1
        if result == magic_number:
            print(f"Combination N:{combinations} ({first_num} + {second_num} = {magic_number})")
            flag = True
            break
    if flag:
        break
else:
    print(f"{combinations} combinations - neither equals {magic_number}")
