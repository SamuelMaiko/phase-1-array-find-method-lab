// code your solution here
function superbowlWin(record){
    const result1=record.find(function(random){
    return random.result==="W";
    });

    if(result1!== undefined){
        return result1.year;
    }
    else{
        return undefined;
    }

}