

function getTimes(numWorker, arrTime, direction) {

    const loading = []
    const unloading = []

    for (let i = 0; i < numWorker; i++) {
        if (direction[i] === 0) loading.push([arrTime[i], i])
        else unloading.push([arrTime[i], i])
    }

    let currTime = 0
    let prev = null
    let results = {}
    while (loading.length || unloading.length) {

        const l = loading[0]
        const u = unloading[0]

        const lTime = l ? Math.max(l[0], currTime) : Infinity
        const uTime = u ? Math.max(u[0], currTime) : Infinity

        if (lTime === uTime) {
            if (prev === null || prev === 1) {
                results[u[1]] = uTime
                unloading.shift()
                prev = 1
            } else {
                results[l[1]] = lTime
                loading.shift()
                prev = 0
            }
        } else if (lTime < uTime) {
            results[l[1]] = lTime
            loading.shift()
            prev = 0
        } else {
            results[u[1]] = uTime
            unloading.shift()
            prev = 1
        }
        currTime++
    }

    return Object.keys(results).map((i) => results[i]);
}


// console.log(getTimes(5, [0, 1, 1, 3, 3], [0, 1, 0, 0, 1]))