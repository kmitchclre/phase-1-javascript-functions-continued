// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bath my dog')

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(special = '*') {
    return function (adjective = "a good student") {
        return `You are ${special}${adjective}${special}`
    }
}

function wrapAdjective(special = '||') {
    return function (adjective = "a dedicated programmer") {
        return `You are ${special}${adjective}${special}!`
    }
}