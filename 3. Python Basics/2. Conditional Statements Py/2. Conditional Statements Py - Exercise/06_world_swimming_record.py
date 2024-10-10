record_to_beat = float(input())
distance_to_swim_meters = float(input())
time_per_meter = float(input())

time_for_all_the_distance_meters = distance_to_swim_meters * time_per_meter

water_pressure = distance_to_swim_meters // 15
time_wasted = water_pressure * 12.50
total_time_in_seconds = time_for_all_the_distance_meters + time_wasted

if total_time_in_seconds < record_to_beat:
    print(f"Yes, he succeeded! The new world record is {total_time_in_seconds:.2f} seconds.")
else:
    time_slower = total_time_in_seconds - record_to_beat
    print(f"No, he failed! He was {time_slower:.2f} seconds slower.")
