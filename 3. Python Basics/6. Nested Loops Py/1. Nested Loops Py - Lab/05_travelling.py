while True:
    command = input()
    if command == "End":
        break
    min_budget = float(input())
    start_sum = 0

    while start_sum < min_budget:
        money = float(input())
        start_sum += money
        if start_sum >= min_budget:
            print(f"Going to {command}!")
            break
