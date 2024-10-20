climbers_groups = int(input())

all_people = 0
musalla_group = 0
mont_blanc_group = 0
kilimanjaro_group = 0
k2_group = 0
everest_group = 0

for _ in range(climbers_groups):
    climbers_in_group = int(input())
    all_people += climbers_in_group

    if climbers_in_group <= 5:
        musalla_group += climbers_in_group
    elif climbers_in_group <= 12:
        mont_blanc_group += climbers_in_group
    elif climbers_in_group <= 25:
        kilimanjaro_group += climbers_in_group
    elif climbers_in_group <= 40:
        k2_group += climbers_in_group
    elif climbers_in_group >= 41:
        everest_group += climbers_in_group

musalla_percent = (musalla_group / all_people) * 100
mont_blanc_percent = (mont_blanc_group / all_people) * 100
kilimanjaro_percent = (kilimanjaro_group / all_people) * 100
k2_percent = (k2_group / all_people) * 100
everest_percent = (everest_group / all_people) * 100

print(f"{musalla_percent:.2f}%")
print(f"{mont_blanc_percent:.2f}%")
print(f"{kilimanjaro_percent:.2f}%")
print(f"{k2_percent:.2f}%")
print(f"{everest_percent:.2f}%")
