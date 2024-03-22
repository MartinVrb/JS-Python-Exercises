function projectsCreation(input){

    let name = input[0];
    let projectCount = Number(input[1]);
    let result = `The architect ${name} will need ${projectCount * 3} hours to complete ${projectCount} project/s.`;

    console.log(result);
}
projectsCreation([ "George", "4"]);