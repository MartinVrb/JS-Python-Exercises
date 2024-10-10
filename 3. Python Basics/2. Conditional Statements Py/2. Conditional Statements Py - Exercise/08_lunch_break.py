from math import ceil

series_name = input()
episode_length = int(input())
rest_length = int(input())
time_for_lunch = rest_length * (1 / 8)
time_for_leisure = rest_length * 0.25

rest_length -= time_for_lunch + time_for_leisure

if rest_length >= episode_length:
    time_left = rest_length - episode_length
    print(f"You have enough time to watch {series_name} and left with {ceil(time_left)} minutes free time.")
else:
    needed_time = episode_length - rest_length
    print(f"You don't have enough time to watch {series_name}, you need {ceil(needed_time)} more minutes.")