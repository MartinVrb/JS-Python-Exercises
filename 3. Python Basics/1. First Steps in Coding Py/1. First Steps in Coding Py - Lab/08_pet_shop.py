dogs_food_packages = int(input())
cats_food_packages = int(input())

dogs_food_price = 2.50
cats_food_price = 4

final_price_dogs = dogs_food_packages * dogs_food_price
final_price_cats = cats_food_packages * cats_food_price

final_price = final_price_cats + final_price_dogs

print(f'{final_price} lv.')