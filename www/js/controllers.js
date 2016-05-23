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

        var higherID;

        $scope.myDataId.on('value', function(snapshot) {
            $scope.$apply();
            $scope.higherID = snapshot.val().id + 1;
        });

        $scope.savaTuto = function() {
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

        $scope.myDataS = new Firebase("https://incandescent-fire-3734.firebaseio.com/Tutos/Cuisine");
        $scope.tutos = {};

        $scope.idTuto;

        $scope.myDataS.on('value', function(snapshot) {
            $scope.tutos = snapshot.val();
            $scope.$apply();
        });

        $scope.single = function(id) {
            $scope.idTuto = id;
        };
    })

    .controller('DbCtrlSport', function($scope) {

        $scope.myDataS = new Firebase("https://incandescent-fire-3734.firebaseio.com/Tutos/Sport");
        $scope.tutos = {};

        $scope.myDataS.on('value', function(snapshot) {
            $scope.tutos = snapshot.val();
            $scope.$apply();
        });

    })

    .controller('DbCtrlBricolage', function($scope) {

        $scope.myDataS = new Firebase("https://incandescent-fire-3734.firebaseio.com/Tutos/Bricolage");
        $scope.tutos = {};

        $scope.myDataS.on('value', function(snapshot) {
            $scope.tutos = snapshot.val();
            $scope.$apply();
        });

    });
