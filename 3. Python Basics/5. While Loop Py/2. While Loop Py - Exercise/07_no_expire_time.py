width = int(input())
length = int(input())
height = int(input())
free_place = width * length * height
command = input()

while command != "Done":
    command = int(command)
    free_place -= command
    if free_place < 0:
        print(f"No more free space! You need {abs(free_place)} Cubic meters more.")
        break
    command = input()
else:
    print(f"{free_place} Cubic meters left.")
