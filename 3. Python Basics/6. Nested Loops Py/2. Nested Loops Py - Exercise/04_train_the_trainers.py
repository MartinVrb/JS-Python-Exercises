juries_count = int(input())
presentation = input()
grades_sum = 0
average_all_grades = 0
average_counter = 0

while presentation != "Finish":
    for _ in range(juries_count):
        grade = float(input())
        grades_sum += grade

    average_per_presentation = grades_sum / juries_count
    average_all_grades += average_per_presentation
    average_counter += 1
    print(f"{presentation} - {average_per_presentation:.2f}.")
    average_per_presentation = 0
    grades_sum = 0
    presentation = input()

else:
    print(f"Student's final assessment is {(average_all_grades / average_counter):.2f}.")
