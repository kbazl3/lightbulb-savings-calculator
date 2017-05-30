angular.module('myCalculator')
    .controller("mainCtrl", function($scope) {



        $scope.lumen_options = [375, 600, 900, 1125, 1600];
        $scope.current_lumens = 600;

        $scope.currentCost = 13;
        $scope.currentHours = 4;
        $scope.totalDays = 365;

        $scope.incConversion = .0625;
        $scope.halConversion = .0450;
        $scope.cflConversion = .0146;
        $scope.ledConversion = .0125;

        $scope.calculate = function() {
            $scope.incWattage = ($scope.current_lumens * $scope.incConversion).toFixed(1);
            $scope.halWattage = ($scope.current_lumens * $scope.halConversion).toFixed(1);
            $scope.cflWattage = ($scope.current_lumens * $scope.cflConversion).toFixed(1);
            $scope.ledWattage = ($scope.current_lumens * $scope.ledConversion).toFixed(1);

            if ($scope.currentHours > 24) {
                $scope.currentHours = 24;
            }

            let totalHours = $scope.totalDays * $scope.currentHours;
            let cost = $scope.currentCost / 100;

            $scope.incCost = ((($scope.incWattage * totalHours) / 1000) * cost).toFixed(2);
            $scope.halCost = ((($scope.halWattage * totalHours) / 1000) * cost).toFixed(2);
            $scope.cflCost = ((($scope.cflWattage * totalHours) / 1000) * cost).toFixed(2);
            $scope.ledCost = ((($scope.ledWattage * totalHours) / 1000) * cost).toFixed(2);
        };

        $scope.calculate();












});
