goal = 10000
all_steps = 0

while all_steps <= goal:
    command = input()
    if command == "Going home":
        all_steps += int(input())
        break
    all_steps += int(command)

if all_steps >= goal:
    steps_over = all_steps - goal
    print("Goal reached! Good job!")
    print(f"{steps_over} steps over the goal!")

else:
    needed_steps = goal - all_steps
    print(f"{needed_steps} more steps to reach goal.")

