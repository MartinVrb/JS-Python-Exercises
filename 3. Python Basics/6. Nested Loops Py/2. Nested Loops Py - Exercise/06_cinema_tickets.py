student_ticket = 0
standard_ticket = 0
kid_ticket = 0
all_tickets = 0
full_capacity = 0

while True:
    movie_name = input()
    if movie_name == "Finish":
        print(f"Total tickets: {all_tickets}")
        print(f"{((student_ticket / all_tickets) * 100):.2f}% student tickets.")
        print(f"{((standard_ticket / all_tickets) * 100):.2f}% standard tickets.")
        print(f"{((kid_ticket / all_tickets) * 100):.2f}% kids tickets.")
        break

    sold_tickets = 0
    free_places = int(input())
    command = input()
    while command != "End":
        if command == "student":
            student_ticket += 1
        elif command == "standard":
            standard_ticket += 1
        elif command == "kid":
            kid_ticket += 1
        sold_tickets += 1
        if sold_tickets == free_places:
            break
        command = input()
    full_capacity = (sold_tickets / free_places) * 100
    print(f"{movie_name} - {(full_capacity):.2f}% full.")
    all_tickets += sold_tickets
    full_capacity = 0
