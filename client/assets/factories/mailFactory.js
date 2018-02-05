app.factory('mailFactory', ['$http', function($http){

  var _this = this;

  function MailFactory(){
    this.sendeMail = function(mail){
      return $http.post('/email', mail)
      .then(function(res){
        return res.data
      })
    }
}
  return new MailFactory();
}])
