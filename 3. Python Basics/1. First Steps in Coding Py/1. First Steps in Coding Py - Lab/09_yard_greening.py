green_meters = float(input())
price_one_meter = 7.61
price_all_meters = green_meters * 7.61

discount = price_all_meters * 0.18
final_price = price_all_meters * 0.82
rounded_final_price = round(final_price, 2)

print(f'The final price is: {rounded_final_price} lv.')
print(f'The discount is: {discount} lv.')