const ERR_MUST_BE_A_NUMBER = 'ERR_MUST_BE_A_NUMBER'

const doTask = async (number) => {
    return new Promise((resolve, reject) => {
        if(typeof number !== 'number') {
            reject(new HttpNotAuthorized())
        }
    
        resolve(number / 2)
    })
}


;(async () => {
        doTask('s').catch(err => {
            console.log("🚀 ~ file: index.js:26 ~ doTask ~ err:", err)
            console.log(typeof err)
            console.log(err.name)
            console.log(err.cause)
            console.log(Object.keys(err))
            console.log(err instanceof HttpNotAuthorized)
        })
})()