length_cm = int(input())
width_cm = int(input())
height_cm = int(input())
percent = float(input()) / 100

volume_cm = length_cm * width_cm * height_cm
volume_liters = volume_cm / 1000

place_taken = volume_liters * percent
free_place = volume_liters - place_taken

print(free_place)