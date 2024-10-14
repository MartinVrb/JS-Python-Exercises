exam_hour = int(input())
exam_minutes = int(input())
arriving_hour = int(input())
arriving_minutes = int(input())

exam_time = exam_hour * 60 + exam_minutes
arriving_time = arriving_hour * 60 + arriving_minutes
time_diff = exam_time - arriving_time

if time_diff > 30:
    print("Early")
elif time_diff < 0:
    print("Late")
else:
    print("On time")

hours = abs(time_diff) // 60
minutes = abs(time_diff) % 60

result = ""

if hours > 0:
    result = f"{hours}:{minutes:02d} hours"
elif minutes > 0:
    result = f"{minutes} minutes"

if time_diff > 0:
    result += " before the start"
elif time_diff < 0:
    result += " after the start"

print(result)
