pens_packages = int(input())
markers_packages = int(input())
cleaner_liters = int(input())
discount = int(input()) / 100

pens_price_per_package = 5.80
markers_price_per_package = 7.20
cleaner_price_per_liter = 1.20

final_pens_price = pens_packages * pens_price_per_package
final_markers_price = markers_packages * markers_price_per_package
final_cleaner_price = cleaner_liters * cleaner_price_per_liter

price_for_all = final_pens_price + final_markers_price + final_cleaner_price
discount_from_final_sum = price_for_all * discount
final_sum = price_for_all - discount_from_final_sum

print(final_sum)