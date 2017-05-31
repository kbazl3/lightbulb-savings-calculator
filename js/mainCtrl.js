angular.module('myCalculator')
    .controller("mainCtrl", function($scope) {



        $scope.lumen_options = [375, 600, 900, 1125, 1600]; //populate the <options> tag
        $scope.current_lumens = 600; //default value

        $scope.currentCost = 13; //default value
        $scope.currentHours = 4;

        const incConversion = .0625;
        const halConversion = .0450;
        const cflConversion = .0146;
        const ledConversion = .0125;

        $scope.calculate = () => {
            $scope.incWattage = ($scope.current_lumens * incConversion).toFixed(1);
            $scope.halWattage = ($scope.current_lumens * halConversion).toFixed(1);
            $scope.cflWattage = ($scope.current_lumens * cflConversion).toFixed(1);
            $scope.ledWattage = ($scope.current_lumens * ledConversion).toFixed(1);

            if ($scope.currentHours > 24) {
                $scope.currentHours = 24;
            }

            let totalHours = 365 * $scope.currentHours;
            let cost = $scope.currentCost / 100;

            $scope.incCost = ((($scope.incWattage * totalHours) / 1000) * cost).toFixed(2);
            $scope.halCost = ((($scope.halWattage * totalHours) / 1000) * cost).toFixed(2);
            $scope.cflCost = ((($scope.cflWattage * totalHours) / 1000) * cost).toFixed(2);
            $scope.ledCost = ((($scope.ledWattage * totalHours) / 1000) * cost).toFixed(2);
        };

        $scope.calculate();



    });
