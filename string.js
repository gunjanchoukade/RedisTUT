const client = require('./client')

async function main(){
    await client.set('name',"Gunjan Choukade");
    const name = await client.get('name');
    console.log(name);

    await client.set('count',0);
    await client.incr('count');
    console.log('count after incr',await client.get('count'));

    await client.incrby('count',100);
    console.log('count after incrby 100',await client.get('count'));

    await client.mset("name1",'Kishori Choukade',"name2",'G Choukade');
    console.log(await client.mget("name1","name2"));





}
main();