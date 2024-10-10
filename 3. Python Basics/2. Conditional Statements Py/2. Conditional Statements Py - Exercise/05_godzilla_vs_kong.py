film_budget = float(input())
extras_num = int(input())
clothing_price_per_extra = float(input())
clothing_price_for_all_extras = extras_num * clothing_price_per_extra
decor = film_budget * 0.10

if extras_num > 150:
    clothing_price_for_all_extras *= (1 - 0.10)

final_cost = decor + clothing_price_for_all_extras

if final_cost > film_budget:
    needed_money = final_cost - film_budget
    print("Not enough money!")
    print(f"Wingard needs {needed_money:.2f} leva more.")
else:
    money_left = film_budget - final_cost
    print("Action!")
    print(f"Wingard starts filming with {money_left:.2f} leva left.")
