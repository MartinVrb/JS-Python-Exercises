type = input()
rows = int(input())
columns = int(input())
final_sum_full_cinema = rows * columns
price = 0

if type == "Premiere":
    final_sum_full_cinema *= 12.00
elif type == "Normal":
    final_sum_full_cinema *= 7.50
elif type == "Discount":
    final_sum_full_cinema *= 5.00

print(f"{final_sum_full_cinema:.2f} leva")
