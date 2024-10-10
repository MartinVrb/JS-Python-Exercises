budget = float(input())
video_cards_count = int(input())
processors_count = int(input())
ram_memory_count = int(input())

price_per_video_card = 250
all_video_cards_price = video_cards_count * price_per_video_card

price_per_processor = all_video_cards_price * 0.35
all_processors_price = processors_count * price_per_processor

price_per_ram_memory = all_video_cards_price * 0.10
all_ram_memories_price = ram_memory_count * price_per_ram_memory

final_sum = all_video_cards_price + all_processors_price + all_ram_memories_price

if video_cards_count > processors_count:
    final_sum *= (1 - 0.15)

if budget >= final_sum:
    money_left = budget - final_sum
    print(f"You have {money_left:.2f} leva left!")
else:
    needed_money = final_sum - budget
    print(f"Not enough money! You need {needed_money:.2f} leva more!")
