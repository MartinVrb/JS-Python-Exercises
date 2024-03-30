function salary(input) {

    let tabsCount = Number(input[0]);
    let numberSalary = Number(input[1]);

    let deductedSalary = 0;

    for (let i = 2; i < input.length; i++) {
        let website = input[i];

        if (website === `Facebook`) {
            deductedSalary += 150;
        } else if (website === `Instagram`) {
            deductedSalary += 100;
        } else if (website === `Reddit`) {
            deductedSalary += 50;
        }
    }

    let finalSalary = numberSalary - deductedSalary;

    if (finalSalary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        remainingSalary = finalSalary;
        console.log(`${Math.trunc(remainingSalary)}`);

    }
    
}
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])