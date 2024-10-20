from math import floor

competitions_count = int(input())
starting_points = int(input())
points = 0
won_competitions = 0

for _ in range(competitions_count):
    current_competition = input()

    if current_competition == "W":
        points += 2000
        won_competitions += 1
    elif current_competition == "F":
        points += 1200
    elif current_competition == "SF":
        points += 720

all_points = starting_points + points
average_competitions_points = points / competitions_count
won_competitions_percent = (won_competitions / competitions_count) * 100

print(f"Final points: {all_points}")
print(f"Average points: {floor(average_competitions_points)}")
print(f"{won_competitions_percent:.2f}%")
