
console.log('mailFactory')
app.factory('mailFactory', ['$http', function($http){

  var _this = this;



  function MailFactory(){


    this.sendeMail = function(mail){
      console.log('factory', mail)
      return $http.post('/email', mail)
      .then(function(res){
        console.log(res.data)
        return res.data
      })
    }

}
  return new MailFactory();
}])
