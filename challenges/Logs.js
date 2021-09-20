

var reorderLogFiles = function(logs) {
    //initiate letters and digits as an empty array
    let letterLogs = []
    let digitLogs = []

    //loop through the logs
    // for (let log of logs){
        //split up the log by spaces and save as a "firstLog" variable
        // let firstLog = log.split(' ')[1]
        //check if the firstLog is a number
        // if(!isNaN(firstLog)){
        //     //if yes-- pussh to the digitLogs
        //     digitLogs.push(log)
        // }else{
        //     //else-- pussh to the letterLogs
        //     letterLogs.push(log)
        // }
    // }

    //loop through the logs
    for(let i = 0; i < logs.length; i++){
        //extract logs and save them to variable
        const log = logs[i].substring(logs[i].indexOf(' ') + 1, logs[i.length])
        const isDigit = !isNaN(log[0]);
        if(isDigit){
            //if yes-- pussh to the digitLogs
            digitLogs.push(logs[i])
        }else{
            //else-- pussh to the letterLogs
            letterLogs.push(logs[i])
        }
    }
    
    //sort letterLogs
    letterLogs.sort((a, b) => {
        const firstSpaceA = a.indexOf(' ')
        const firstSpaceB = b.indexOf(' ')
        
        const contentA = a.substring(firstSpaceA + 1, a.length)
        const contentB = b.substring(firstSpaceB + 1, b.length)

        //check if logs are the same
        if(contentA === contentB){
            //save ids to variables
            const idA = a.substring(0, firstSpaceA)
            const idB = b.substring(0, firstSpaceB)

            //comparison logs id
            if (idA < idB) {
                return -1
            } else if(idA > idB) {
                return 1
            } else {
                return 0
            }
        }
        return contentA < contentB ? -1 : 1;
    })

    //return sorted letterLods first, then digitLogs by concatination method
    return letterLogs.concat(digitLogs);
};


reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])