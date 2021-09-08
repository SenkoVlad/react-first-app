export const chat = () => {
  var PROTO_PATH = 'chatroom.proto';
  
  var grpc = require('@grpc/grpc-js');
  var protoLoader = require('@grpc/proto-loader');
  var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    });
  var charmop_proto = grpc.loadPackageDefinition(packageDefinition).chatroom;

  var target = 'localhost:4000';
  var client = new charmop_proto.ChatRoom(target,
    grpc.credentials.createInsecure());

  client.sendMessage({messageText : "JS JS JS JS JS"}, function(err, response){
      return response.message;
  });

  // var call = client.joinChat({name : 'vlad'});
  // call.on('data', function(response) {
  //   console.log('Message from server: ' + response.message);
  // });
  // call.on('end', function() {
  //   console.log('grpc end message');
  // });
  // call.on('error', function(e) {
  //   console.log(`grpc error: ${e}`);
  // });
  // call.on('status', function(status) {
  //   console.log(`grpc status: ${status}`);
  // });
}
