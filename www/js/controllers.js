angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('DbCtrlAdd', function($scope) {
        $scope.myDataC = new Firebase("https://incandescent-fire-3734.firebaseio.com/Tutos/Cuisine");
        $scope.myDataS = new Firebase("https://incandescent-fire-3734.firebaseio.com/Tutos/Sport");
        $scope.myDataB = new Firebase("https://incandescent-fire-3734.firebaseio.com/Tutos/Bricolage");
        $scope.myDataId = new Firebase("https://incandescent-fire-3734.firebaseio.com/Id");

        $scope.tutos = {};

        $scope.savaTuto = function() {
            $scope.myDataId.on('value', function(snapshot) {
                $scope.higherID = snapshot.val().id + 1;
                $scope.$apply();
            });
            if($scope.tutoCategorie == "Sport") {
                $scope.myDataS.push({
                    Id:$scope.higherID,
                    Name:$scope.tutoName,
                    Description:$scope.tutoDescription,
                    Categorie:$scope.tutoCategorie
                });
            } else if($scope.tutoCategorie == "Bricolage") {
                $scope.myDataB.push({
                    Id:$scope.higherID,
                    Name:$scope.tutoName,
                    Description:$scope.tutoDescription,
                    Categorie:$scope.tutoCategorie
                });
            } else {
                $scope.myDataC.push({
                    Id:$scope.higherID,
                    Name:$scope.tutoName,
                    Description:$scope.tutoDescription,
                    Categorie:$scope.tutoCategorie
                });
            }
            $scope.tutoName = "";
            $scope.tutoDescription = "";
            $scope.myDataId.update({
                id:$scope.higherID
            });
        };
    })

    .controller('DbCtrlCuisine', function($scope) {

        $scope.myDataC.on('value', function(snapshot) {
            $scope.tutos = snapshot.val();
            $scope.$apply();
        });
    })

    .controller('DbCtrlSport', function($scope) {

        $scope.myDataS = new Firebase("https://incandescent-fire-3734.firebaseio.com/Tutos/Sport");
        $scope.tutos = {};

        $scope.myDataS.on('value', function(snapshot) {
            $scope.tutos = snapshot.val();
            console.log($scope.tutos);
            $scope.$apply();
        });

    })

    .controller('DbCtrlBricolage', function($scope) {

        $scope.myDataB.on('value', function(snapshot) {
            $scope.tutos = snapshot.val();
            $scope.$apply();
        });

    });
