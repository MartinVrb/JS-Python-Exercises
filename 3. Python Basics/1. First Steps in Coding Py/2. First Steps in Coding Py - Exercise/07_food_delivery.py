CHICKEN_MENU = 10.35
FISH_MENU = 12.40
VEGETARIAN_MENU = 8.15
DELIVERY = 2.50

qty_chicken_menus = int(input())
qty_fish_menus = int(input())
qty_vegetarian_menus = int(input())

price_chicken_menus = qty_chicken_menus * CHICKEN_MENU
price_fish_menus = qty_fish_menus * FISH_MENU
price_vegetarian_menus = qty_vegetarian_menus * VEGETARIAN_MENU

food_price = price_chicken_menus + price_fish_menus + price_vegetarian_menus
dessert_price = food_price * 0.20

total_price = food_price + dessert_price + DELIVERY

print(f'{round(total_price, 2)}')