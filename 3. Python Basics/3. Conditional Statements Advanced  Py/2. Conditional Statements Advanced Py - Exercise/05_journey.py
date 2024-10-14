budget = float(input())
season = input()

sleep_location = None
destination = None
money_spent = None
price = 0

if budget <= 100:
    destination = "Bulgaria"
    if season == "summer":
        money_spent = budget * 0.3
    elif season == "winter":
        money_spent = budget * 0.7

elif budget <= 1000:
    destination = "Balkans"
    if season == "summer":
        money_spent = budget * 0.4
    elif season == "winter":
        money_spent = budget * 0.8

elif budget > 1000:
    destination = "Europe"
    money_spent = budget * 0.9

if destination == "Europe":
    sleep_location = "Hotel"
elif season == "summer":
    sleep_location = "Camp"
elif season == "winter":
    sleep_location = "Hotel"

print(f"Somewhere in {destination}")
print(f"{sleep_location} - {money_spent:.2f}")
