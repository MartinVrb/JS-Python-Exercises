student_name = input()
years_counter = 0
failed_years = 0
average_grade = 0

while years_counter < 12:
    annual_grade = float(input())

    if annual_grade < 4:
        failed_years += 1
        if failed_years == 2:
            years_counter += 1
            print(f"{student_name} has been excluded at {years_counter} grade")
            break
        continue

    years_counter += 1
    average_grade += annual_grade

else:
    average = average_grade / 12
    print(f"{student_name} graduated. Average grade: {average:.2f}")
