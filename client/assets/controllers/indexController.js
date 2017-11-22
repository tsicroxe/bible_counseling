console.log('running indexController')



app.controller('indexController', ['$scope', '$location', 'mailFactory', function($scope, $location, mf){

  $scope.error = {message: ''}

  $scope.shortAlert = function(){
    console.log('alert')
    alert("Windows successfully submitted")
  }

  $scope.sendeMail = function(mail){
    $scope.error.message = ''
    console.log('mail', mail)

    mf.sendeMail(mail)
    .then(function(data){
      console.log(data)
      if(data.success === true){
      bootbox.alert({
        title: 'Success!',
        message: "Your message has been successfully submitted",
        button: {
            class: 'btn-success',
            className: 'btn-success'
            }
      });
    }
      else{
        bootbox.alert({
          title: 'Uh oh!',
          message: "Your message failed to submit. Please try again or contact the administrator",
          button: {
              class: 'btn-success',
              className: 'btn-success'
          }

        });
      }
    })
    $scope.mail = {}
  }


}])
