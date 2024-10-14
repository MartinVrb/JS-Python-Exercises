city = input()
sales = float(input())
result = 0
boolean = True

if city == "Sofia":
    if sales < 0:
        boolean = False
        print("error")
    elif 0 <= sales <= 500:
        result = sales * 0.05
    elif 500 < sales <= 1000:
        result = sales * 0.07
    elif 1000 < sales <= 10000:
        result = sales * 0.08
    else:
        result = sales * 0.12

elif city == "Varna":
    if sales < 0:
        boolean = False
        print("error")
    elif 0 <= sales <= 500:
        result = sales * 0.045
    elif 500 < sales <= 1000:
        result = sales * 0.075
    elif 1000 < sales <= 10000:
        result = sales * 0.10
    else:
        result = sales * 0.13

elif city == "Plovdiv":
    if sales < 0:
        boolean = False
        print("error")
    elif 0 <= sales <= 500:
        result = sales * 0.055
    elif 500 < sales <= 1000:
        result = sales * 0.08
    elif 1000 < sales <= 10000:
        result = sales * 0.12
    else:
        result = sales * 0.145

else:
    boolean = False
    print("error")

if boolean:
    print(f"{result:.2f}")
