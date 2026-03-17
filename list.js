const client = require('./client')
async function main(){
    // await client.lpush('names','gunjan')
    // await client.rpush('names','kishori')
    // await client.rpush('names','choukade')

    // const names = await client.lrange('names',0,-1);
    // console.log(names);

    // await client.lpop('names');
    const response = await client.blpop('names',40);
    console.log(response);
    
}
main();