num1 = int(input())
num2 = int(input())
operator = input()

result = None

if operator == "+":
    result = num1 + num2
    print(f"{num1} + {num2} = {result} " + ("- even" if result % 2 == 0 else "- odd"))

elif operator == "-":
    result = num1 - num2
    print(f"{num1} - {num2} = {result} " + ("- even" if result % 2 == 0 else "- odd"))

elif operator == "*":
    result = num1 * num2
    print(f"{num1} * {num2} = {result} " + ("- even" if result % 2 == 0 else "- odd"))

elif operator == "/":
    if num2 == 0:
        print(f"Cannot divide {num1} by zero")
    else:
        result = num1 / num2
        print(f"{num1} / {num2} = {result:.2f}")

elif operator == "%":
    if num2 == 0:
        print(f"Cannot divide {num1} by zero")
    else:
        result = num1 % num2
        print(f"{num1} % {num2} = {result}")
