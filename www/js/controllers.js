angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('DbCtrl', function($scope) {
        $scope.myData = new Firebase("https://incandescent-fire-3734.firebaseio.com/Tutos");
        $scope.myDataId = new Firebase("https://incandescent-fire-3734.firebaseio.com/Id");

        $scope.tutos = {};

        $scope.idCat = 1;

        $scope.higherID = 2;

        $scope.myDataId.update({
            id:$scope.higherID
        });

        $scope.myDataId.on('value', function(snapshot) {
            $scope.tutos = snapshot.val();
            $scope.$apply();
        });
        console.log($scope.tutos.id);

        $scope.savaTuto = function() {
            $scope.myData.push({
                Id:$scope.idCat,
                Name:$scope.tutoName,
                Description:$scope.tutoDescription,
                Categorie:$scope.tutoCategorie
            });
            $scope.tutoName = "";
            $scope.tutoDescription = "";
            $scope.myDataId.update({
                id:$scope.higherID
            });
        };

    });


