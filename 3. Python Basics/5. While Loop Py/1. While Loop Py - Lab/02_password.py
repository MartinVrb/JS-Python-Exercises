username = input()
password = input()
while True:
    tries = input()
    if tries == password:
        print(f"Welcome {username}!")
        break
