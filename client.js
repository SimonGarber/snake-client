const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.110',
    port: 50541
    
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  // interpret incoming data as text
}) 
  conn.on('connect',() =>{
    console.log(`Server Says: `,'successfully connected to the snake server' )
})
conn.on('connect', () => {
    conn.write("Name: BOB")
  return conn;
})
}





module.exports = {connect};