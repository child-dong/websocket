var server = require('ws').Server;

var s = new server({port: 5001});

s.on('connection',function (ws) {
  // console.log('one');
  ws.on("message",function(message){

  	message = JSON.parse(message)

  	if(message.type == "name"){
  		ws.userName = message.data
  		console.log(message)
  		return
  	}


  	s.clients.forEach((item) =>{
  		console.log(message)

  		if(item != ws){
  			item.send(JSON.stringify({
  				name: ws.userName,
  				data: message.data
  			}))
  		}
  	})

    // if(message == "hello"){
    //   ws.send('aaa:'+message)
    // }else{
    //   ws.send(message)
    // }
  })
})