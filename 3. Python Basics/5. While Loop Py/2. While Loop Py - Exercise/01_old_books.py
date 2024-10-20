book = input()
command = input()
counter = 0

while command != "No More Books":
    if command == book:
        print(f"You checked {counter} books and found it.")
        break
    counter += 1
    command = input()
else:
    print("The book you search is not here!")
    print(f"You checked {counter} books.")
