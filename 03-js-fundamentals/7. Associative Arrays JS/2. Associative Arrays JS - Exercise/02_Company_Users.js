function companyUsers(array) {

    let companyEmployees = {};

    for (let command of array) {

        let [company, employeeId] = command.split(" -> ");

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeId)) {
                companyEmployees[company].push(employeeId);
            }
        } else {
            companyEmployees[company] = [employeeId];
        }

    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employeeIds] of entries) {
        console.log(company);
        for (let employeeId of employeeIds) {
            console.log(`-- ${employeeId}`);
        }
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);