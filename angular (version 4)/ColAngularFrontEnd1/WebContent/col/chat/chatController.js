app.controller("chatController",function($scope,$http,ChatService,$rootScope)
		{
	console.log("in side chat ")
	$rootScope.userforum=true;
	$rootScope.userjobs=true;
	$rootScope.adminblog=false;
	$rootScope.adminforum=false;
	$rootScope.register=false;
	$rootScope.home=true;
	$rootScope.addjobs=false;
	$rootScope.login=false;
	$rootScope.jobs=false;
	$rootScope.blogs=true;
	$rootScope.allblogs=true;
	$rootScope.chat=true;
	$rootScope.friendslist=true;
	$rootScope.logout=true;
	console.log("in chat  controller");
	$scope.messages = [];
	  $scope.message = "";
	  $scope.max = 140;
	  
	  $scope.addMessage = function() {
		  console.log("in addmessage fn");
	    ChatService.send($scope.message);
	    $scope.message = "";
	  };
//bind data from page to html and from to function and binds to scope.
	  ChatService.receive().then(null, null, function(message) {
		  console.log("inside recieeve:"+message);
		  console.log("inside recieeve:"+$scope.message);
	    $scope.messages.push(message);
	    $rootScope.uname;
	  });
	}
		);

app.service("ChatService", function($q, $timeout) {
    
    var service = {}, listener = $q.defer(), socket = {
      client: null, // $defer  will help to convert websocket to JSON
      stomp: null
    }, messageIds = [];
    
    service.RECONNECT_TIMEOUT = 30000;
    service.SOCKET_URL = "/angularbackend/chat";  //backend server
    service.CHAT_TOPIC = "/topic/message";  // this is broadcast type, data is kept in this chat-topic broker , this is synchronised
    service.CHAT_BROKER = "/app/chat";
    
    service.receive = function() {
      return listener.promise;
    };
    
    service.send = function(message) //as soon as add is called,and random id is assigned and kept under variable called id,and priority is set while sening it from client to server, 
    //javascript array will hold the pool of array and will pick id from the array
    {
    	console.log("in send function");
      var id = Math.floor(Math.random() * 1000000);
      socket.stomp.send(service.CHAT_BROKER, {
        priority: 9
      }, JSON.stringify({
        message: message,
        id: id
      }));
      messageIds.push(id);
    };
    
    var reconnect = function() // whenver connection is lost it will reestablish connection within 30sec
    
    {
      $timeout(function() {
        initialize();
      }, this.RECONNECT_TIMEOUT);
    };
    
    var getMessage = function(data) // calling the data ,body consist of web socket payload and converted into JSON,listene interacts btwn page and database
    {
      var message = JSON.parse(data), out = {};
      out.message = message.message;
      out.username = message.username;  
      out.time = new Date(message.time);
      if (_.contains(messageIds, message.id)) {
        out.self = true;
        messageIds = _.remove(messageIds, message.id);
      }
      return out;
    };
    
    var startListener = function() // make understand the server that data is coming
    {
      socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
        listener.notify(getMessage(data.body));
      });
    };
    
    var initialize = function() {
      socket.client = new SockJS(service.SOCKET_URL); //
      socket.stomp = Stomp.over(socket.client); 
      socket.stomp.connect({}, startListener);
      socket.stomp.onclose = reconnect;
    };
    
    initialize(); //make javascript socks js to listen to web server
    return service;
  });


