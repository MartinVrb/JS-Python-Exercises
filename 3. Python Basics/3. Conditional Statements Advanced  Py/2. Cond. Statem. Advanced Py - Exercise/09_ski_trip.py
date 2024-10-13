ROOM_FOR_ONE_PERSON_PER_NIGHT = 18
APARTMENT_PER_NIGHT = 25
PRESIDENT_APARTMENT_PER_NIGHT = 35

days_to_stay = int(input())
type_of_room = input()
assessment = input()
final_price = 0

if type_of_room == "room for one person":
    final_price = ROOM_FOR_ONE_PERSON_PER_NIGHT * (days_to_stay - 1)
elif type_of_room == "apartment":
    final_price = APARTMENT_PER_NIGHT * (days_to_stay - 1)
    if days_to_stay < 10:
        final_price *= (1 - 0.30)
    elif days_to_stay <= 15:
        final_price *= (1 - 0.35)
    elif days_to_stay > 15:
        final_price *= (1 - 0.50)
elif type_of_room == "president apartment":
    final_price = PRESIDENT_APARTMENT_PER_NIGHT * (days_to_stay - 1)
    if days_to_stay < 10:
        final_price *= (1 - 0.10)
    elif days_to_stay <= 15:
        final_price *= (1 - 0.15)
    elif days_to_stay > 15:
        final_price *= (1 - 0.20)

if assessment == "positive":
    final_price *= 1.25  # extra tip
elif assessment == "negative":
    final_price *= (1 - 0.10)

print(f"{final_price:.2f}")
