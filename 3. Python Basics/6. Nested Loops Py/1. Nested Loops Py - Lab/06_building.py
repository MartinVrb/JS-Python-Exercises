all_floors = int(input())
rooms_per_floor = int(input())
result = ""

for floor in range(all_floors, 0, -1):
    for room in range(rooms_per_floor):
        if floor == all_floors:
            result = f"L{floor}{room}"
        elif floor % 2 == 0:
            result = f"O{floor}{room}"
        else:
            result = f"A{floor}{room}"

        print(result, end=" ")

    print()
