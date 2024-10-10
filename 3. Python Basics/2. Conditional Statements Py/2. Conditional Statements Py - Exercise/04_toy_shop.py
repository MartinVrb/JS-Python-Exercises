PUZZLE = 2.60
DOLL = 3
TEDDY_BEAR = 4.10
MINION = 8.20
TRUCK = 2
DISCOUNT = 0.25
RENT = 0.10

excursion_price = float(input())

puzzles_count = int(input())
dolls_count = int(input())
teddy_bears_count = int(input())
minions_count = int(input())
trucks_count = int(input())

puzzles_price = puzzles_count * PUZZLE
dolls_price = dolls_count * DOLL
teddy_bears_price = teddy_bears_count * TEDDY_BEAR
minions_price = minions_count * MINION
trucks_price = trucks_count * TRUCK

total_toys_count = puzzles_count + dolls_count + teddy_bears_count + minions_count + trucks_count
all_toys_price = puzzles_price + dolls_price + teddy_bears_price + minions_price + trucks_price

if total_toys_count >= 50:
    all_toys_price = all_toys_price * (1-DISCOUNT)

all_toys_price = all_toys_price * (1-RENT)

if all_toys_price >= excursion_price:
    money_left = all_toys_price - excursion_price
    print(f"Yes! {money_left:.2f} lv left.")
else:
    money_needed = excursion_price - all_toys_price
    print(f"Not enough money! {money_needed:.2f} lv needed.")