const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.110',
    port: 50541
    
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  
}) 
  conn.on('connect',() =>{
    console.log(`Server Says: `,'successfully connected to the snake server' )
})
conn.on('connect', () => {
    conn.write("Name: BOB")
  
})
// conn.on('connect', (data) => {
//     conn.write("Move: up")
//     setTimeout(() =>  {
//         conn.write("Move: up")
//     },2000)
// })
return conn;
}





module.exports = {connect};