excursion_money = float(input())
jessy_money = float(input())
spend_counter = 0
days = 0

while True:
    action = input()
    value = float(input())
    days += 1

    if action == "spend":
        jessy_money -= value
        if jessy_money < 0:
            jessy_money = 0
        spend_counter += 1
        if spend_counter == 5:
            print("You can't save the money.")
            print(f"{days}")
            break
    elif action == "save":
        spend_counter = 0
        jessy_money += value
        if jessy_money >= excursion_money:
            print(f"You saved the money for {days} days.")
            break
