MONEY_INCREASE = 10
BROTHERS_TAX = 1

girls_age = int(input())
washing_machine_price = float(input())
price_per_toy = int(input())
money_per_year = 0
toys_money = 0
money_sum = 0

for age in range(1, girls_age + 1):
    if age % 2 == 0:
        money_per_year += MONEY_INCREASE
        money_sum += money_per_year - BROTHERS_TAX
    else:
        toys_money += price_per_toy

money_sum += toys_money

if money_sum >= washing_machine_price:
    money_left = money_sum - washing_machine_price
    print(f"Yes! {money_left:.2f}")
else:
    needed_money = washing_machine_price - money_sum
    print(f"No! {needed_money:.2f}")
