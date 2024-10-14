month = input()
nights = int(input())

studio_price_per_night = 0
apartment_price_per_night = 0

if month == "May" or month == "October":
    studio_price_per_night = 50
    apartment_price_per_night = 65
    if 7 < nights <= 14:
        studio_price_per_night *= (1 - 0.05)
    elif nights > 14:
        studio_price_per_night *= (1 - 0.30)
        apartment_price_per_night *= (1 - 0.10)
elif month == "June" or month == "September":
    studio_price_per_night = 75.20
    apartment_price_per_night = 68.70
    if nights > 14:
        studio_price_per_night *= (1 - 0.20)
        apartment_price_per_night *= (1 - 0.10)
elif month == "July" or month == "August":
    studio_price_per_night = 76
    apartment_price_per_night = 77
    if nights > 14:
        apartment_price_per_night *= (1 - 0.10)

final_apartment_price = nights * apartment_price_per_night
final_studio_price = nights * studio_price_per_night

print(f"Apartment: {final_apartment_price:.2f} lv.")
print(f"Studio: {final_studio_price:.2f} lv.")
