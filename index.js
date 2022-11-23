// code your solution here
function saturdayFun(activity = "roller-skate", msg){
    msg = `This Saturday, I want to ${activity}!`;
    return msg;
}
const mondayWork = function(activity = 'go to the office', msg){
    msg = `This Monday, I will ${activity}.`
    return msg;
};
function wrapAdjective(strng = "*"){
    return function(para = 'special'){
        return `You are ${strng}${para}${strng}!`
    }
}
wrapAdjective("%")("a dedicated programmer");