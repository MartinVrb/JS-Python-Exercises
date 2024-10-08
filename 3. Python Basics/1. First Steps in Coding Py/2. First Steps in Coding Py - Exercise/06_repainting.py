NYLON_PER_METER = 1.50
PAINT_PER_LITER = 14.50
PAINT_THINNER_PER_LITER = 5

needed_nylon = int(input())
needed_paint = int(input())
total_amount_paint_thinner = int(input())
hours_to_finish = int(input())

total_amount_nylon = needed_nylon + 2
total_amount_paint = needed_paint * 1.10

final_sum_nylon = total_amount_nylon * NYLON_PER_METER
final_sum_paint = total_amount_paint * PAINT_PER_LITER
final_sum_paint_thinner = total_amount_paint_thinner * PAINT_THINNER_PER_LITER
final_sum_bags = 0.40

materials_sum = final_sum_nylon + final_sum_paint + final_sum_paint_thinner + final_sum_bags

masters_salary_per_hour = materials_sum * 0.30
masters_salary = hours_to_finish * masters_salary_per_hour

final_sum = materials_sum + masters_salary

print(f'{final_sum}')