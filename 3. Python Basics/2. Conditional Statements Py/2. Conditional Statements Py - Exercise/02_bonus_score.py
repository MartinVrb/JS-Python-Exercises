start_number = int(input())
bonus_points = 0

if start_number <= 100:
    bonus_points = 5
elif 100 < start_number <= 1000:
    bonus_points = start_number * 0.20
else:
    bonus_points = start_number * 0.10

if start_number % 2 == 0:
    bonus_points += 1
elif start_number % 10 == 5:
    bonus_points += 2

final_num = start_number + bonus_points
print(bonus_points)
print(final_num)