from sys import maxsize

command = input()
max_num = -maxsize

while command != "Stop":
    command = int(command)

    if command > max_num:
        max_num = command

    command = input()

print(max_num)
