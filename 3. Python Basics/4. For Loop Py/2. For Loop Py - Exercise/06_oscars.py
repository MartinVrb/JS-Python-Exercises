POINTS_TO_BE_NOMINATED = 1250.5

actors_name = input()
points = float(input())
number_of_assessors = int(input())

for _ in range(number_of_assessors):
    judge_name = input()
    judge_points = float(input())
    points += len(judge_name) * (judge_points / 2)

    if points >= POINTS_TO_BE_NOMINATED:
        print(f"Congratulations, {actors_name} got a nominee for leading role with {points:.1f}!")
        break
else:
    points_needed = POINTS_TO_BE_NOMINATED - points
    print(f"Sorry, {actors_name} you need {points_needed:.1f} more!")
