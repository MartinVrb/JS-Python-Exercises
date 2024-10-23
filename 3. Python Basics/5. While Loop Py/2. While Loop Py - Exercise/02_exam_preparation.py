bad_grades = int(input())
current_bad_grades = 0
average_grade = 0
grades_counter = 0
task_counter = 0
last_task = 0

task = input()

while task != "Enough":
    task_counter += 1
    last_task = task
    grade = int(input())
    grades_counter += 1
    average_grade += grade

    if grade <= 4:
        current_bad_grades += 1
        if current_bad_grades == bad_grades:
            print(f"You need a break, {bad_grades} poor grades.")
            break
    task = input()
else:
    print(f"Average score: {(average_grade / grades_counter):.2f}")
    print(f"Number of problems: {task_counter}")
    print(f"Last problem: {last_task}")
