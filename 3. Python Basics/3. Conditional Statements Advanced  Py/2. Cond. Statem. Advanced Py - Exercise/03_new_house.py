ROSES = 5
DAHLIAS = 3.80
TULIPS = 2.80
NARCISSUS = 3
GLADIOLUS = 2.50

type_flower = input()
flowers_num = int(input())
budget = int(input())
final_sum = 0

if type_flower == "Roses":
    final_sum += flowers_num * ROSES
    if flowers_num > 80:
        final_sum *= (1 - 0.10)
elif type_flower == "Dahlias":
    final_sum += flowers_num * DAHLIAS
    if flowers_num > 90:
        final_sum *= (1 - 0.15)
elif type_flower == "Tulips":
    final_sum += flowers_num * TULIPS
    if flowers_num > 80:
        final_sum *= (1 - 0.15)
elif type_flower == "Narcissus":
    final_sum += flowers_num * NARCISSUS
    if flowers_num < 120:
        final_sum *= 1.15
elif type_flower == "Gladiolus":
    final_sum += flowers_num * GLADIOLUS
    if flowers_num < 80:
        final_sum *= 1.20

if budget >= final_sum:
    money_left = budget - final_sum
    print(f"Hey, you have a great garden with {flowers_num} {type_flower} and {money_left:.2f} leva left.")
else:
    needed_money = final_sum - budget
    print(f"Not enough money, you need {needed_money:.2f} leva more.")
