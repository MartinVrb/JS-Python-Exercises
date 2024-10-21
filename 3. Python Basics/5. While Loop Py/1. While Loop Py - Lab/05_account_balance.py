command = input()
bill = 0

while command != "NoMoreMoney":
    command = float(command)
    if command < 0:
        print("Invalid operation!")
        break

    print(f"Increase: {command:.2f}")
    bill += command
    command = input()

print(f"Total: {bill:.2f}")
