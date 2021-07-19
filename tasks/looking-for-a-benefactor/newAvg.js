function newAvg(arr, newavg){
    const result = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
    if(result <= 0) 
      throw 'errror'
    return Math.ceil(result)
}

module.exports = newAvg