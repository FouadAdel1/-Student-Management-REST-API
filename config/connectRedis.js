const {createClient } = require('redis')
const redisClient = createClient();
(async()=>{
 await redisClient.connect()
 console.log("redis connected")
})()
module.exports=redisClient