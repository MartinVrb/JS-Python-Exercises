SPRING_RENT = 3000
SUMMER_AND_AUTUMN_RENT = 4200
WINTER_RENT = 2600
EXTRA_DISCOUNT = 0.05

budget = int(input())
season = input()
fishermen_num = int(input())
final_price = 0
discount = 0
extra_discount = 0

if fishermen_num <= 6:
    discount = 0.10
elif fishermen_num <= 11:
    discount = 0.15
elif fishermen_num >= 12:
    discount = 0.25

if season == "Spring":
    final_price = SPRING_RENT * (1 - discount)
elif season == "Summer" or season == "Autumn":
    final_price = SUMMER_AND_AUTUMN_RENT * (1 - discount)
elif season == "Winter":
    final_price = WINTER_RENT * (1 - discount)

if fishermen_num % 2 == 0 and season != "Autumn":
    final_price *= (1 - EXTRA_DISCOUNT)


if budget >= final_price:
    money_left = budget - final_price
    print(f"Yes! You have {money_left:.2f} leva left.")
else:
    needed_money = final_price - budget
    print(f"Not enough money! You need {needed_money:.2f} leva.")
