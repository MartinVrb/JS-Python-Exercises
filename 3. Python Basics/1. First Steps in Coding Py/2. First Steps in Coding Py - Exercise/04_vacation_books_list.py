pages = int(input())
pages_per_hour = int(input())
days = int(input())

total_time = pages // pages_per_hour
needed_time = total_time // days

print(needed_time)