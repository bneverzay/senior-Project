angular.module('app.controllers', [])

    .controller('signInCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            $scope.login = function (login) {

                if (login.username == null && login.password == null) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Sign In Failed',
                        template: 'Please check username or password again.'
                    });
                } else {
                    // Open Member Login
                    $http({
                        method: "POST",
                        url: "http://2-dot-pjpnd-166013.appspot.com/loginMember.do",
                        crossDomain: true,
                        data: {
                            username: login.username,
                            password: login.password
                        },
                        headers: { 'Content-Type': 'application/json' }
                    }).then(function (response) {
                        var members = response.data;
                        var member = members.keyStringMemberEntity;
                        if (members == null || members == '') {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Sign In Failed',
                                template: 'Please check username or password again.'
                            });
                        } else {
                            $state.go('menu', { memberID: member }, { reload: false });
                            $state.go('menu.home', { memberID: member }, { reload: false });
                        }

                    }, function (error) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Connection Failed',
                            template: 'Please check your network connection.'
                        });
                    });
                    // Close Member Login
                }

            }

        }])

    .controller('homeCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/accommodationList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                var accommodation = response.data;
                for (var i = 0; i < accommodation.length; i++) {
                    if (accommodation[i].district == 'MueangChiangRai') {
                        $scope.MueangChiangRai = 'MueangChiangRai';
                    } else if (accommodation[i].district == 'WiangChai') {
                        $scope.WiangChai = 'WiangChai';
                    } else if (accommodation[i].district == 'ChiangKhong') {
                        $scope.ChiangKhong = 'ChiangKhong';
                    } else if (accommodation[i].district == 'Thoeng') {
                        $scope.Thoeng = 'Thoeng';
                    } else if (accommodation[i].district == 'Phan') {
                        $scope.Phan = 'Phan';
                    } else if (accommodation[i].district == 'PaDaet') {
                        $scope.PaDaet = 'PaDaet';
                    } else if (accommodation[i].district == 'MaeChan') {
                        $scope.MaeChan = 'MaeChan';
                    } else if (accommodation[i].district == 'ChiangSaen') {
                        $scope.ChiangSaen = 'ChiangSaen';
                    } else if (accommodation[i].district == 'MaeSai') {
                        $scope.MaeSai = 'MaeSai';
                    } else if (accommodation[i].district == 'MaeSuai') {
                        $scope.MaeSuai = 'MaeSuai';
                    } else if (accommodation[i].district == 'WiangPaPao') {
                        $scope.WiangPaPao = 'WiangPaPao';
                    } else if (accommodation[i].district == 'PhayaMengrai') {
                        $scope.PhayaMengrai = 'PhayaMengrai';
                    } else if (accommodation[i].district == 'WiangKaen') {
                        $scope.WiangKaen = 'WiangKaen';
                    } else if (accommodation[i].district == 'KhunTan') {
                        $scope.KhunTan = 'KhunTan';
                    } else if (accommodation[i].district == 'MaeFaLuang') {
                        $scope.MaeFaLuang = 'MaeFaLuang';
                    } else if (accommodation[i].district == 'MaeLao') {
                        $scope.MaeLao = 'MaeLao';
                    } else if (accommodation[i].district == 'WiangChiangRung') {
                        $scope.WiangChiangRung = 'WiangChiangRung';
                    } else if (accommodation[i].district == 'DoiLuang') {
                        $scope.DoiLuang = 'DoiLuang';
                    }
                }
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            // Close Accommodation List

            if (memberID == null || memberID == '') {
                // Open Function Search
                $scope.search = function (search) {
                    // Fan
                    var fan = search.fan;
                    var valuefan = '';
                    if (fan == true) {
                        valuefan = 'fan';
                    } else {
                        valuefan = '';
                    }
                    // Airconditioner
                    var airconditioner = search.airconditioner;
                    var valueairconditioner = '';
                    if (airconditioner == true) {
                        valueairconditioner = 'airconditioner';
                    } else {
                        valueairconditioner = '';
                    }
                    // Waterheater
                    var waterheater = search.waterheater;
                    var valuewaterheater = '';
                    if (waterheater == true) {
                        valuewaterheater = 'waterheater';
                    } else {
                        valuewaterheater = '';
                    }
                    // Refrigerator
                    var refrigerator = search.refrigerator;
                    var valuerefrigerator = '';
                    if (refrigerator == true) {
                        valuerefrigerator = 'refrigerator';
                    } else {
                        valuerefrigerator = '';
                    }
                    // Television
                    var television = search.television;
                    var valuetelevision = '';
                    if (television == true) {
                        valuetelevision = 'television';
                    } else {
                        valuetelevision = '';
                    }
                    // Furniture
                    var furniture = search.furniture;
                    var valuefurniture = '';
                    if (furniture == true) {
                        valuefurniture = 'furniture';
                    } else {
                        valuefurniture = '';
                    }
                    // Carpark
                    var carpark = search.carpark;
                    var valuecarpark = '';
                    if (carpark == true) {
                        valuecarpark = 'carpark';
                    } else {
                        valuecarpark = '';
                    }
                    // Closedcircuitcamera
                    var closedcircuitcamera = search.closedcircuitcamera;
                    var valueclosedcircuitcamera = '';
                    if (closedcircuitcamera == true) {
                        valueclosedcircuitcamera = 'closedcircuitcamera';
                    } else {
                        valueclosedcircuitcamera = '';
                    }
                    // Elevator
                    var elevator = search.elevator;
                    var valueelevator = '';
                    if (elevator == true) {
                        valueelevator = 'elevator';
                    } else {
                        valueelevator = '';
                    }
                    // Washingmachine
                    var washingmachine = search.washingmachine;
                    var valuewashingmachine = '';
                    if (washingmachine == true) {
                        valuewashingmachine = 'washingmachine';
                    } else {
                        valuewashingmachine = '';
                    }
                    // Drinkingwaterdispenser
                    var drinkingwaterdispenser = search.drinkingwaterdispenser;
                    var valuedrinkingwaterdispenser = '';
                    if (drinkingwaterdispenser == true) {
                        valuedrinkingwaterdispenser = 'drinkingwaterdispenser';
                    } else {
                        valuedrinkingwaterdispenser = '';
                    }
                    // Swimmingpool
                    var swimmingpool = search.swimmingpool;
                    var valueswimmingpool = '';
                    if (swimmingpool == true) {
                        valueswimmingpool = 'swimmingpool';
                    } else {
                        valueswimmingpool = '';
                    }
                    // Fitness
                    var fitness = search.fitness;
                    var valuefitness = '';
                    if (fitness == true) {
                        valuefitness = 'fitness';
                    } else {
                        valuefitness = '';
                    }
                    // Keycard
                    var keycard = search.keycard;
                    var valuekeycard = '';
                    if (keycard == true) {
                        valuekeycard = 'keycard';
                    } else {
                        valuekeycard = '';
                    }

                    if (search.typeofaccommodation == 'apartment') {
                        $state.go('resultApartment', {
                            typeofaccommodation: search.typeofaccommodation,
                            typeofapartment: search.typeofapartment,
                            rentrates: search.valuerentrates,
                            depositrates: search.valuedepositrates,
                            district: search.district,
                            province: search.province,
                            fan: valuefan,
                            airconditioner: valueairconditioner,
                            waterheater: valuewaterheater,
                            refrigerator: valuerefrigerator,
                            television: valuetelevision,
                            furniture: valuefurniture,
                            carpark: valuecarpark,
                            closedcircuitcamera: valueclosedcircuitcamera,
                            elevator: valueelevator,
                            washingmachine: valuewashingmachine,
                            drinkingwaterdispenser: valuedrinkingwaterdispenser,
                            swimmingpool: valueswimmingpool,
                            fitness: valuefitness,
                            keycard: valuekeycard
                        }, { reload: true });
                    } else if (search.typeofaccommodation == 'house') {
                        $state.go('resultHouse', {
                            typeofaccommodation: search.typeofaccommodation,
                            rentrates: search.valuerentrates,
                            depositrates: search.valuedepositrates,
                            district: search.district,
                            province: search.province,
                            fan: valuefan,
                            airconditioner: valueairconditioner,
                            waterheater: valuewaterheater,
                            refrigerator: valuerefrigerator,
                            television: valuetelevision,
                            furniture: valuefurniture,
                            carpark: valuecarpark,
                            closedcircuitcamera: valueclosedcircuitcamera
                        }, { reload: true });
                    }

                }
                // Close Function Search
            } else {
                // Open Member List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    var members = response.data;
                    var keymemberID = members.keyStringMemberEntity;

                    // Open Function Search
                    $scope.search = function (search) {
                        // Fan
                        var fan = search.fan;
                        var valuefan = '';
                        if (fan == true) {
                            valuefan = 'fan';
                        } else {
                            valuefan = '';
                        }
                        // Airconditioner
                        var airconditioner = search.airconditioner;
                        var valueairconditioner = '';
                        if (airconditioner == true) {
                            valueairconditioner = 'airconditioner';
                        } else {
                            valueairconditioner = '';
                        }
                        // Waterheater
                        var waterheater = search.waterheater;
                        var valuewaterheater = '';
                        if (waterheater == true) {
                            valuewaterheater = 'waterheater';
                        } else {
                            valuewaterheater = '';
                        }
                        // Refrigerator
                        var refrigerator = search.refrigerator;
                        var valuerefrigerator = '';
                        if (refrigerator == true) {
                            valuerefrigerator = 'refrigerator';
                        } else {
                            valuerefrigerator = '';
                        }
                        // Television
                        var television = search.television;
                        var valuetelevision = '';
                        if (television == true) {
                            valuetelevision = 'television';
                        } else {
                            valuetelevision = '';
                        }
                        // Furniture
                        var furniture = search.furniture;
                        var valuefurniture = '';
                        if (furniture == true) {
                            valuefurniture = 'furniture';
                        } else {
                            valuefurniture = '';
                        }
                        // Carpark
                        var carpark = search.carpark;
                        var valuecarpark = '';
                        if (carpark == true) {
                            valuecarpark = 'carpark';
                        } else {
                            valuecarpark = '';
                        }
                        // Closedcircuitcamera
                        var closedcircuitcamera = search.closedcircuitcamera;
                        var valueclosedcircuitcamera = '';
                        if (closedcircuitcamera == true) {
                            valueclosedcircuitcamera = 'closedcircuitcamera';
                        } else {
                            valueclosedcircuitcamera = '';
                        }
                        // Elevator
                        var elevator = search.elevator;
                        var valueelevator = '';
                        if (elevator == true) {
                            valueelevator = 'elevator';
                        } else {
                            valueelevator = '';
                        }
                        // Washingmachine
                        var washingmachine = search.washingmachine;
                        var valuewashingmachine = '';
                        if (washingmachine == true) {
                            valuewashingmachine = 'washingmachine';
                        } else {
                            valuewashingmachine = '';
                        }
                        // Drinkingwaterdispenser
                        var drinkingwaterdispenser = search.drinkingwaterdispenser;
                        var valuedrinkingwaterdispenser = '';
                        if (drinkingwaterdispenser == true) {
                            valuedrinkingwaterdispenser = 'drinkingwaterdispenser';
                        } else {
                            valuedrinkingwaterdispenser = '';
                        }
                        // Swimmingpool
                        var swimmingpool = search.swimmingpool;
                        var valueswimmingpool = '';
                        if (swimmingpool == true) {
                            valueswimmingpool = 'swimmingpool';
                        } else {
                            valueswimmingpool = '';
                        }
                        // Fitness
                        var fitness = search.fitness;
                        var valuefitness = '';
                        if (fitness == true) {
                            valuefitness = 'fitness';
                        } else {
                            valuefitness = '';
                        }
                        // Keycard
                        var keycard = search.keycard;
                        var valuekeycard = '';
                        if (keycard == true) {
                            valuekeycard = 'keycard';
                        } else {
                            valuekeycard = '';
                        }

                        if (search.typeofaccommodation == 'apartment') {
                            $state.go('resultApartment', {
                                memberID: keymemberID, typeofaccommodation: search.typeofaccommodation,
                                typeofapartment: search.typeofapartment,
                                rentrates: search.valuerentrates,
                                depositrates: search.valuedepositrates,
                                district: search.district,
                                province: search.province,
                                fan: valuefan,
                                airconditioner: valueairconditioner,
                                waterheater: valuewaterheater,
                                refrigerator: valuerefrigerator,
                                television: valuetelevision,
                                furniture: valuefurniture,
                                carpark: valuecarpark,
                                closedcircuitcamera: valueclosedcircuitcamera,
                                elevator: valueelevator,
                                washingmachine: valuewashingmachine,
                                drinkingwaterdispenser: valuedrinkingwaterdispenser,
                                swimmingpool: valueswimmingpool,
                                fitness: valuefitness,
                                keycard: valuekeycard
                            }, { reload: true });
                        } else if (search.typeofaccommodation == 'house') {
                            $state.go('resultHouse', {
                                memberID: keymemberID, typeofaccommodation: search.typeofaccommodation,
                                rentrates: search.valuerentrates,
                                depositrates: search.valuedepositrates,
                                district: search.district,
                                province: search.province,
                                fan: valuefan,
                                airconditioner: valueairconditioner,
                                waterheater: valuewaterheater,
                                refrigerator: valuerefrigerator,
                                television: valuetelevision,
                                furniture: valuefurniture,
                                carpark: valuecarpark,
                                closedcircuitcamera: valueclosedcircuitcamera
                            }, { reload: true });
                        }

                    }
                    // Close Function Search
                });
                // Close Member List
            }

        }])

    .controller('resultApartmentCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;
            var typeofaccommodation = $stateParams.typeofaccommodation;
            var typeofapartment = $stateParams.typeofapartment;
            var rentrates = $stateParams.rentrates;
            var depositrates = $stateParams.depositrates;
            var district = $stateParams.district;
            var province = $stateParams.province;
            var fan = $stateParams.fan;
            var airconditioner = $stateParams.airconditioner;
            var waterheater = $stateParams.waterheater;
            var refrigerator = $stateParams.refrigerator;
            var television = $stateParams.television;
            var furniture = $stateParams.furniture;
            var carpark = $stateParams.carpark;
            var closedcircuitcamera = $stateParams.closedcircuitcamera;
            var elevator = $stateParams.elevator;
            var washingmachine = $stateParams.washingmachine;
            var drinkingwaterdispenser = $stateParams.drinkingwaterdispenser;
            var swimmingpool = $stateParams.swimmingpool;
            var fitness = $stateParams.fitness;
            var keycard = $stateParams.keycard;

            if (memberID == null || memberID == '') {
                // Open Search Accommodation
                $http({
                    method: "GET",
                    url: "http://2-dot-pjpnd-166013.appspot.com/searchAccommodation.do",
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    var accommodations = response.data;

                    $scope.accommodations = [];

                    for (var i = 0; i < accommodations.length; i++) {
                        if (typeofaccommodation == accommodations[i].typeofaccommodation) {
                            if (typeofapartment == accommodations[i].typeofapartment) {
                                if (rentrates == accommodations[i].rentrates) {
                                    if (depositrates == accommodations[i].depositrates) {
                                        if (district == accommodations[i].district) {
                                            if (province == accommodations[i].province) {
                                                if (fan == accommodations[i].fan
                                                    || airconditioner == accommodations[i].airconditioner
                                                    || waterheater == accommodations[i].waterheater
                                                    || refrigerator == accommodations[i].refrigerator
                                                    || television == accommodations[i].television
                                                    || furniture == accommodations[i].furniture
                                                    || carpark == accommodations[i].carpark
                                                    || closedcircuitcamera == accommodations[i].closedcircuitcamera
                                                    || elevator == accommodations[i].elevator
                                                    || washingmachine == accommodations[i].washingmachine
                                                    || drinkingwaterdispenser == accommodations[i].drinkingwaterdispenser
                                                    || swimmingpool == accommodations[i].swimmingpool
                                                    || fitness == accommodations[i].fitness
                                                    || keycard == accommodations[i].keycard) {

                                                    $scope.accommodations.push({
                                                        keyStringAccommodationEntity: accommodations[i].keyStringAccommodationEntity,
                                                        accommodationname: accommodations[i].accommodationname,
                                                        pictureaccommodation: accommodations[i].pictureaccommodation,
                                                        typeofaccommodation: accommodations[i].typeofaccommodation,
                                                        typeofapartment: accommodations[i].typeofapartment,
                                                        address: accommodations[i].address,
                                                        district: accommodations[i].district,
                                                        province: accommodations[i].province,
                                                        rentrates: accommodations[i].rentrates
                                                    });

                                                    break;
                                                } else {

                                                    $scope.accommodations.push({
                                                        keyStringAccommodationEntity: null
                                                    });

                                                    break;
                                                }
                                            } else {

                                                $scope.accommodations.push({
                                                    keyStringAccommodationEntity: null
                                                });

                                                break;
                                            }
                                        } else {

                                            $scope.accommodations.push({
                                                keyStringAccommodationEntity: null
                                            });

                                            break;
                                        }
                                    } else {
                                        $scope.accommodations.push({
                                            keyStringAccommodationEntity: null
                                        });

                                        break;
                                    }
                                } else {
                                    $scope.accommodations.push({
                                        keyStringAccommodationEntity: null
                                    });

                                    break;
                                }
                            } 
                        }
                    }
                });
                // Close Search Accommodation
            } else {
                // Open Search Accommodation
                $http({
                    method: "GET",
                    url: "http://2-dot-pjpnd-166013.appspot.com/searchAccommodation.do",
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    var accommodations = response.data;

                    $scope.accommodations = [];

                    for (var i = 0; i < accommodations.length; i++) {
                        if (typeofaccommodation == accommodations[i].typeofaccommodation) {
                            if (typeofapartment == accommodations[i].typeofapartment) {
                                if (rentrates == accommodations[i].rentrates) {
                                    if (depositrates == accommodations[i].depositrates) {
                                        if (district == accommodations[i].district) {
                                            if (province == accommodations[i].province) {
                                                if (fan == accommodations[i].fan
                                                    || airconditioner == accommodations[i].airconditioner
                                                    || waterheater == accommodations[i].waterheater
                                                    || refrigerator == accommodations[i].refrigerator
                                                    || television == accommodations[i].television
                                                    || furniture == accommodations[i].furniture
                                                    || carpark == accommodations[i].carpark
                                                    || closedcircuitcamera == accommodations[i].closedcircuitcamera
                                                    || elevator == accommodations[i].elevator
                                                    || washingmachine == accommodations[i].washingmachine
                                                    || drinkingwaterdispenser == accommodations[i].drinkingwaterdispenser
                                                    || swimmingpool == accommodations[i].swimmingpool
                                                    || fitness == accommodations[i].fitness
                                                    || keycard == accommodations[i].keycard) {

                                                    $scope.accommodations.push({
                                                        keyStringAccommodationEntity: accommodations[i].keyStringAccommodationEntity,
                                                        accommodationname: accommodations[i].accommodationname,
                                                        pictureaccommodation: accommodations[i].pictureaccommodation,
                                                        typeofaccommodation: accommodations[i].typeofaccommodation,
                                                        typeofapartment: accommodations[i].typeofapartment,
                                                        address: accommodations[i].address,
                                                        district: accommodations[i].district,
                                                        province: accommodations[i].province,
                                                        rentrates: accommodations[i].rentrates
                                                    });

                                                    break;
                                                } else {
                                                    $scope.accommodations.push({
                                                        keyStringAccommodationEntity: null
                                                    });

                                                    break;
                                                }
                                            } else {
                                                $scope.accommodations.push({
                                                    keyStringAccommodationEntity: null
                                                });

                                                break;
                                            }
                                        } else {
                                            $scope.accommodations.push({
                                                keyStringAccommodationEntity: null
                                            });

                                            break;
                                        }
                                    } else {
                                        $scope.accommodations.push({
                                            keyStringAccommodationEntity: null
                                        });

                                        break;
                                    }
                                } else {
                                    $scope.accommodations.push({
                                        keyStringAccommodationEntity: null
                                    });

                                    break;
                                }
                            } 
                        }
                    }
                });
                // Close Search Accommodation

                // Open Member List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    $scope.member = response.data;
                }, function (error) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Connection Failed',
                        template: 'Please check your network connection.'
                    });
                });
                $scope.member = {};
                // Close Member List
            }

        }])

    .controller('resultHouseCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;
            var typeofaccommodation = $stateParams.typeofaccommodation;
            var rentrates = $stateParams.rentrates;
            var depositrates = $stateParams.depositrates;
            var district = $stateParams.district;
            var province = $stateParams.province;
            var fan = $stateParams.fan;
            var airconditioner = $stateParams.airconditioner;
            var waterheater = $stateParams.waterheater;
            var refrigerator = $stateParams.refrigerator;
            var television = $stateParams.television;
            var furniture = $stateParams.furniture;
            var carpark = $stateParams.carpark;
            var closedcircuitcamera = $stateParams.closedcircuitcamera;

            if (memberID == null || memberID == '') {
                // Open Search Accommodation
                $http({
                    method: "GET",
                    url: "http://2-dot-pjpnd-166013.appspot.com/searchAccommodation.do",
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    var accommodations = response.data;

                    $scope.accommodations = [];

                    for (var i = 0; i < accommodations.length; i++) {
                        if (typeofaccommodation == accommodations[i].typeofaccommodation) {
                            if (rentrates == accommodations[i].rentrates) {
                                if (depositrates == accommodations[i].depositrates) {
                                    if (district == accommodations[i].district) {
                                        if (province == accommodations[i].province) {
                                            if (fan == accommodations[i].fan
                                                || airconditioner == accommodations[i].airconditioner
                                                || waterheater == accommodations[i].waterheater
                                                || refrigerator == accommodations[i].refrigerator
                                                || television == accommodations[i].television
                                                || furniture == accommodations[i].furniture
                                                || carpark == accommodations[i].carpark
                                                || closedcircuitcamera == accommodations[i].closedcircuitcamera) {

                                                $scope.accommodations.push({
                                                    keyStringAccommodationEntity: accommodations[i].keyStringAccommodationEntity,
                                                    accommodationname: accommodations[i].accommodationname,
                                                    pictureaccommodation: accommodations[i].pictureaccommodation,
                                                    typeofaccommodation: accommodations[i].typeofaccommodation,
                                                    address: accommodations[i].address,
                                                    district: accommodations[i].district,
                                                    province: accommodations[i].province,
                                                    rentrates: accommodations[i].rentrates
                                                });

                                                break;
                                            } else {
                                                $scope.accommodations.push({
                                                    keyStringAccommodationEntity: null
                                                });

                                                break;
                                            }
                                        } else {
                                            $scope.accommodations.push({
                                                keyStringAccommodationEntity: null
                                            });

                                            break;
                                        }
                                    } else {
                                        $scope.accommodations.push({
                                            keyStringAccommodationEntity: null
                                        });

                                        break;
                                    }
                                } else {
                                    $scope.accommodations.push({
                                        keyStringAccommodationEntity: null
                                    });

                                    break;
                                }
                            } else {
                                $scope.accommodations.push({
                                    keyStringAccommodationEntity: null
                                });

                                break;
                            }
                        }
                    }
                });
                // Close Search Accommodation
            } else {
                // Open Search Accommodation
                $http({
                    method: "GET",
                    url: "http://2-dot-pjpnd-166013.appspot.com/searchAccommodation.do",
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    var accommodations = response.data;

                    $scope.accommodations = [];

                    for (var i = 0; i < accommodations.length; i++) {
                        if (typeofaccommodation == accommodations[i].typeofaccommodation) {
                            if (rentrates == accommodations[i].rentrates) {
                                if (depositrates == accommodations[i].depositrates) {
                                    if (district == accommodations[i].district) {
                                        if (province == accommodations[i].province) {
                                            if (fan == accommodations[i].fan
                                                || airconditioner == accommodations[i].airconditioner
                                                || waterheater == accommodations[i].waterheater
                                                || refrigerator == accommodations[i].refrigerator
                                                || television == accommodations[i].television
                                                || furniture == accommodations[i].furniture
                                                || carpark == accommodations[i].carpark
                                                || closedcircuitcamera == accommodations[i].closedcircuitcamera) {

                                                $scope.accommodations.push({
                                                    keyStringAccommodationEntity: accommodations[i].keyStringAccommodationEntity,
                                                    accommodationname: accommodations[i].accommodationname,
                                                    pictureaccommodation: accommodations[i].pictureaccommodation,
                                                    typeofaccommodation: accommodations[i].typeofaccommodation,
                                                    address: accommodations[i].address,
                                                    district: accommodations[i].district,
                                                    province: accommodations[i].province,
                                                    rentrates: accommodations[i].rentrates
                                                });

                                                break;
                                            } else {
                                                $scope.accommodations.push({
                                                    keyStringAccommodationEntity: null
                                                });

                                                break;
                                            }
                                        } else {
                                            $scope.accommodations.push({
                                                keyStringAccommodationEntity: null
                                            });

                                            break;
                                        }
                                    } else {
                                        $scope.accommodations.push({
                                            keyStringAccommodationEntity: null
                                        });

                                        break;
                                    }
                                } else {
                                    $scope.accommodations.push({
                                        keyStringAccommodationEntity: null
                                    });

                                    break;
                                }
                            } else {
                                $scope.accommodations.push({
                                    keyStringAccommodationEntity: null
                                });

                                break;
                            }
                        }
                    }
                });
                // Open Search Accommodation;

                // Open Member List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    $scope.member = response.data;
                }, function (error) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Connection Failed',
                        template: 'Please check your network connection.'
                    });
                });
                $scope.member = {};
                // Close Member List
            }

        }])

    .controller('detailAccommodationCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var accommodationID = $stateParams.accommodationID;
            var memberID = $stateParams.memberID;

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findAccommodation.do?accommodationID=" + accommodationID,
                cache: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.accommodation = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.accommodation = {};
            // Close Accommodation List

            if (memberID == null || memberID == '') {

            } else {
                // Open Member List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    $scope.member = response.data;
                });
                $scope.member = {};
                // Close Member List
            }

            // Open Room List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/roomList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.roomlists = response.data;
            });
            $scope.roomlists = [];
            // Close Room List

            // Open Rental List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/rentalList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rentals = response.data;
            });
            $scope.rentals = [];
            // Close Rental List

            // Open Review List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/reviewList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.reviews = response.data;
            });
            $scope.reviews = [];
            // Close Review List

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/memberList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.membercheck = response.data;
            });
            $scope.membercheck = [];
            // Close Member List

            // Open Photo List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/photoList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.roomphotos = response.data;
            });
            $scope.roomphotos = [];
            // Close Photo List

            // Open Function Review
            $scope.saveReview = function (review, accommodation, member) {
                $http({
                    method: "POST",
                    url: "http://2-dot-pjpnd-166013.appspot.com/saveReview.do",
                    crossDomain: true,
                    data: {
                        accommodationID: accommodation.keyStringAccommodationEntity,
                        memberID: member.keyStringMemberEntity,
                        firstname: member.firstname,
                        lastname: member.lastname,
                        comment: review.comment,
                        statusreview: 'unreported'
                    },
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    $state.go('detailAccommodation', { accommodationID: accommodation.keyStringAccommodationEntity, memberID: member.keyStringMemberEntity }, { reload: true });
                }, function (error) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Connection Failed',
                        template: 'Please check your network connection.'
                    });
                });
            }
            // Close Function Review

            // Open Popup confirm review delete
            $scope.showConfirmReviewDelete = function (review, accommodation, member) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Confirm delete review',
                    template: 'Do you want to delete, right?'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        // Open Delete Review
                        $http({
                            method: 'GET',
                            url: "http://2-dot-pjpnd-166013.appspot.com/deleteReview.do?reviewID=" + review.keyStringReviewEntity,
                            cache: false,
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            }
                        }).then(function (response) {
                            $state.go('detailAccommodation', { accommodationID: accommodation.keyStringAccommodationEntity, memberID: member.keyStringMemberEntity }, { reload: true });
                        }, function (error) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Connection Failed',
                                template: 'Please check your network connection.'
                            });
                        });
                        // Close Delete Review
                    } else {
                    }
                });
            };
            // Close Popup confirm review delete

        }])

    .controller('detailRoomCtrl', ['$scope', '$stateParams', '$http', '$filter', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $filter, $state, $ionicPopup) {
            // Get Parameter
            var accommodationID = $stateParams.accommodationID;
            var roomID = $stateParams.roomID;
            var memberID = $stateParams.memberID;

            $scope.date = new Date();

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findAccommodation.do?accommodationID=" + accommodationID,
                cache: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.accommodation = response.data;
            });
            $scope.accommodation = {};
            // Close Accommodation List

            if (memberID == null || memberID == '') {

            } else {
                // Open Member List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    $scope.member = response.data;
                    var members = response.data;
                    var memberID = members.keyStringMemberEntity;
                    // Open Rental List
                    $http({
                        method: 'GET',
                        url: "http://2-dot-pjpnd-166013.appspot.com/rentalList.do",
                        cache: false,
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    }).then(function (response) {
                        var rentals = response.data;
                        for (var i = 0; i < rentals.length; i++) {
                            if (memberID == rentals[i].memberIDforBooking) {
                                $scope.memberID = rentals[i].memberIDforBooking;
                                break;
                            }
                        }
                    });
                    // Close Rental List
                });
                $scope.member = {};
                // Open Member List
            }

            // Open Room List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findRoom.do?roomID=" + roomID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.room = response.data;
                var rooms = response.data;
                var roomID = rooms.keyStringRoomEntity;
                // Open Rental List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/rentalList.do",
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    var rentals = response.data;
                    for (var i = 0; i < rentals.length; i++) {
                        if (roomID == rentals[i].roomIDforBooking) {
                            $scope.rentalID = rentals[i].roomIDforBooking;
                            $scope.rentalmoveoutaccommodation = rentals[i].moveoutaccommodation;
                            break;
                        }
                    }
                }, function (error) {
                });
                // Close Rental List
            });
            $scope.room = {};
            // Close Room List

            // Open Popup confirm booking For Member
            $scope.showConfirmBookingForMember = function (date, accommodation, room, member, moveinaccommodation, moveoutaccommodation) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Confirm booking',
                    template: 'Are you sure?'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        var bookingdate = $filter('date')(new Date(), 'yyyy-MM-dd');
                        var movein = $filter('date')(moveinaccommodation, 'yyyy-MM-dd');
                        var moveout = $filter('date')(moveoutaccommodation, 'yyyy-MM-dd');

                        // Open Save Rental
                        $http({
                            method: "POST",
                            url: "http://2-dot-pjpnd-166013.appspot.com/saveRental.do",
                            crossDomain: true,
                            data: {
                                accommodationID: accommodation.keyStringAccommodationEntity,
                                accommodationIDforBooking: accommodation.keyStringAccommodationEntity,
                                roomID: room.keyStringRoomEntity,
                                roomIDforBooking: room.keyStringRoomEntity,
                                memberID: member.keyStringMemberEntity,
                                memberIDforBooking: member.keyStringMemberEntity,
                                bookingdate: bookingdate,
                                moveinaccommodation: movein,
                                moveoutaccommodation: moveout,
                                rentalagreement: null,
                                statusbooking: 'unapprove',
                                statuspayment: 'nopayment',
                                statusstay: 'moving'
                            },
                            headers: { 'Content-Type': 'application/json' }
                        }).then(function (response) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Booking Sucess',
                                template: 'Please waiting lessor approve booking accommodation.'
                            });
                            $state.go('menu', { memberID: member.keyStringMemberEntity }, { reload: true });
                            $state.go('menu.home', { memberID: member.keyStringMemberEntity }, { reload: true });
                        }, function (error) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Booking Failed',
                                template: 'You can not booking more than 1 time.'
                            });
                        });
                        // Close Save Rental

                    } else {
                    }
                });
            };
            // Close Popup confirm booking For Member

        }])

    .controller('notificationCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Report a repair List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/reportarepairList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.reportarepairs = response.data;
            });
            $scope.reportarepairs = [];
            // Close Report a repair List

            // Open Rental List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/rentalList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rentals = response.data;
            });
            $scope.rentals = [];
            // Close Rental List

            // Rental Invoice List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/rentalinvoiceList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rentalinvoices = response.data;
            });
            $scope.rentalinvoices = [];
            // Close Rental Invoice List

        }])

    .controller('accountInfoCtrl', ['$scope', '$stateParams', '$http', '$filter', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $filter, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
                var members = response.data;
                var gender = members.gender;
                var occupation = members.occupation;

                if (gender == 'Male') {
                    $scope.gender = 'Male';
                } else if (gender == 'Female') {
                    $scope.gender = 'Female';
                }

                if (occupation == 'Student') {
                    $scope.occupation = 'Student';
                } else if (occupation == 'Teacher') {
                    $scope.occupation = 'Teacher';
                } else if (occupation == 'Security-guard') {
                    $scope.occupation = 'Security-guard';
                } else if (occupation == 'Maid') {
                    $scope.occupation = 'Maid';
                }

            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Popup confirm update information
            $scope.showConfirmUpdateInformation = function (edit, gender, occupation, member) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Update Account',
                    template: 'Are you sure?'
                });

                var formatbirthdate = edit.birthdate;
                var birthdate = $filter('date')(formatbirthdate, 'yyyy-MM-dd');

                confirmPopup.then(function (res) {
                    if (res) {
                        // Open Update Member
                        $http({
                            method: "POST",
                            url: "http://2-dot-pjpnd-166013.appspot.com/updateMember.do",
                            crossDomain: true,
                            data: {
                                keyStringMemberEntity: member.keyStringMemberEntity,
                                firstname: edit.firstname,
                                lastname: edit.lastname,
                                gender: gender,
                                birthdate: birthdate,
                                address: edit.address,
                                occupation: occupation,
                                telephone: edit.telephone,
                                email: edit.email
                            },
                            headers: { 'Content-Type': 'application/json' }
                        }).then(function (response) {
                            $state.go('menu.accountInfo', { memberID: member.keyStringMemberEntity }, { reload: false });
                        }, function (error) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Connection Failed',
                                template: 'Please check your network connection.'
                            });
                        });
                        // Close Update Member
                    } else {
                    }
                });
            };
            // Close Popup confirm update information

        }])

    .controller('changePasswordCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Popup confirm change password
            $scope.showConfirmChangePassword = function (edit, member) {

                var confirmPopup = $ionicPopup.confirm({
                    title: 'Change Password',
                    template: 'Are you sure?'
                });

                confirmPopup.then(function (res) {
                    if (res) {

                        if (edit.newpassword == edit.repassword) {
                            // Open Update Member
                            $http({
                                method: "POST",
                                url: "http://2-dot-pjpnd-166013.appspot.com/updateMember.do",
                                crossDomain: true,
                                data: {
                                    keyStringMemberEntity: member.keyStringMemberEntity,
                                    password: edit.newpassword
                                },
                                headers: { 'Content-Type': 'application/json' }
                            }).then(function (response) {
                                $state.go('menu.changePassword', { memberID: member.keyStringMemberEntity }, { reload: false });
                            }, function (error) {
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Connection Failed',
                                    template: 'Please check your network connection.'
                                });
                            });
                            // Close Update Member
                        } else {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Change Password Failed',
                                template: 'New password or re-password different.'
                            });
                        }

                    } else {
                    }
                });
            };
            // Close Popup confirm update information

        }])

    .controller('accommodationInfoCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;
            var rentalID = $stateParams.rentalID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Rental List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findRental.do?rentalID=" + rentalID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rental = response.data;
                var rentals = response.data;
                var accommodationID = rentals.accommodationID;

                // Open Accommodation List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/accommodationList.do",
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    var accommodation = response.data;
                    for (var i = 0; i < accommodation.length; i++) {
                        if (accommodation[i].keyStringAccommodationEntity == accommodationID) {
                            $scope.pictureaccommodation = accommodation[i].pictureaccommodation;
                        }
                    }
                });
                // Close Accommodation List

            });
            $scope.rental = {};
            // Close Rental List

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/accommodationList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.accommodations = response.data;
            });
            $scope.accommodations = [];
            // Close Accommodation List

            // Open Room List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/roomList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rooms = response.data;
            });
            $scope.rooms = [];
            // Close Room List

        }])

    .controller('rentHistoryCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Rental Invoice List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/rentalinvoiceList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rentalinvoices = response.data;
            });
            $scope.rentalinvoices = [];
            // Close Rental Invoice List

        }])

    .controller('detailRentCtrl', ['$scope', '$stateParams', '$http', '$filter', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $filter, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;
            var rentalinvoiceID = $stateParams.rentalinvoiceID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/accommodationList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.accommodations = response.data;
            });
            $scope.accommodations = [];
            // Close Accommodation List

            // Open Rental List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/rentalList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rentals = response.data;
            });
            $scope.rentals = [];
            // Close Rental List

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findRentalInvoice.do?rentalinvoiceID=" + rentalinvoiceID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rentalinvoice = response.data;
            });
            $scope.rentalinvoice = {};
            // Close Member List

            // Open Popup payment rent
            $scope.savePaymentRent = function (payment, datepayment, timepayment, member, rentalinvoice) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Confirm Payment',
                    template: 'Are you sure?'
                });

                var date = $filter('date')(datepayment, 'yyyy-MM-dd');
                var time = $filter('date')(timepayment, 'HH:mm:ss');

                confirmPopup.then(function (res) {
                    if (res) {
                        // Open Save Rental Invoice
                        $http({
                            method: "POST",
                            url: "http://2-dot-pjpnd-166013.appspot.com/updateRentalInvoice.do",
                            crossDomain: true,
                            data: {
                                keyStringRentalInvoiceEntity: rentalinvoice.keyStringRentalInvoiceEntity,
                                name: payment.name,
                                amountmoney: payment.amountmoney,
                                datepaymentrent: date,
                                timepaymentrent: time,
                                statuspayment: 'paymented'
                            },
                            headers: { 'Content-Type': 'application/json' }
                        }).then(function (response) {
                            $state.go('menu.rentHistory', { memberID: member.keyStringMemberEntity }, { reload: false });
                        }, function (error) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Connection Failed',
                                template: 'Please check your network connection.'
                            });
                        });
                        // Close Save Rental Invoice
                    } else {
                    }
                });
            };
            // Close Popup payment rent

        }])

    .controller('paymentBookingCtrl', ['$scope', '$stateParams', '$http', '$filter', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $filter, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;
            var rentalID = $stateParams.rentalID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Rental List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findRental.do?rentalID=" + rentalID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rental = response.data;
            });
            $scope.rental = {};
            // Close Rental List

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/accommodationList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.accommodations = response.data;
            });
            $scope.accommodations = [];
            // Close Accommodation List

            // Open Room List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/roomList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rooms = response.data;
            });
            $scope.rooms = [];
            // Close Room List

            // Open Popup payment Booking
            $scope.savePaymentBooking = function (payment, datepayment, timepayment, rental, member) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Confirm Payment',
                    template: 'Are you sure?'
                });

                var date = $filter('date')(datepayment, 'yyyy-MM-dd');
                var time = $filter('date')(timepayment, 'HH:mm:ss');

                confirmPopup.then(function (res) {
                    if (res) {
                        // Open Update Rental
                        $http({
                            method: "POST",
                            url: "http://2-dot-pjpnd-166013.appspot.com/updateRental.do",
                            crossDomain: true,
                            data: {
                                keyStringRentalEntity: rental.keyStringRentalEntity,
                                accommodationID: rental.accommodationID,
                                roomID: rental.roomID,
                                memberID: rental.memberID,
                                moveinaccommodation: rental.moveinaccommodation,
                                moveoutaccommodation: rental.moveoutaccommodation,
                                bookingdate: rental.bookingdate,
                                replybooking: rental.replybooking,
                                statusbooking: rental.statusbooking,
                                name: payment.name,
                                datepayment: date,
                                timepayment: time,
                                amountmoney: payment.amountmoney,
                                statuspayment: 'paymented'
                            },
                            headers: { 'Content-Type': 'application/json' }
                        }).then(function (response) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Payment Success',
                                template: 'Thank you.'
                            });
                            $state.go('menu', { memberID: member.keyStringMemberEntity }, { reload: false });
                            $state.go('menu.home', { memberID: member.keyStringMemberEntity }, { reload: false });
                        }, function (error) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Payment Failed',
                                template: 'Please check information your payment again.'
                            });
                        });
                        // Close Update Rental
                    } else {
                    }
                });
            }
            // Close Popup payment Booking

        }])

    .controller('bookingStatusCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;
            var rentalID = $stateParams.rentalID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Rental List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findRental.do?rentalID=" + rentalID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rental = response.data;
            });
            $scope.rental = {};
            // Close Rental List

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/accommodationList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.accommodations = response.data;
            });
            $scope.accommodations = [];
            // Close Accommodation List

            // Open Popup confirm delete
            $scope.showConfirmDelete = function (member, rental) {
                var rentalID = rental.keyStringRentalEntity;

                var confirmPopup = $ionicPopup.confirm({
                    title: 'Confirm delete booking',
                    template: 'Are you sure?'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        // Open Delete Rental
                        $http({
                            method: 'GET',
                            url: "http://2-dot-pjpnd-166013.appspot.com/deleteRental.do?rentalID=" + rentalID,
                            cache: false,
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            }
                        }).then(function (response) {
                            $state.go('menu', { memberID: member.keyStringMemberEntity }, { reload: true });
                            $state.go('menu.home', { memberID: member.keyStringMemberEntity }, { reload: true });
                        }, function (error) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Connection Failed',
                                template: 'Please check your network connection.'
                            });
                        });
                        // Close Delete Rental
                    } else {
                    }
                });
            };
            // Close Popup confirm delete

        }])

    .controller('statusStayCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;
            var rentalID = $stateParams.rentalID;

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Rental List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findRental.do?rentalID=" + rentalID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rental = response.data;
            });
            $scope.rental = {};
            // Close Rental List

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/accommodationList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.accommodations = response.data;
            });
            $scope.accommodations = [];
            // Close Accommodation List

        }])

    .controller('reportARepairCtrl', ['$scope', '$stateParams', '$http', '$filter', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $filter, $state, $ionicPopup) {
            // Get Parameter
            var memberID = $stateParams.memberID;
            var rentalID = $stateParams.rentalID;

            // Open Function Report a Repair
            $scope.saveReportarepair = function (report, member, accommodation, room) {
                var reportarepair = $filter('date')(new Date(), 'yyyy-MM-dd');
                // Open Save Report a Repair
                $http({
                    method: "POST",
                    url: "http://2-dot-pjpnd-166013.appspot.com/saveReportarepair.do",
                    crossDomain: true,
                    data: {
                        accommodationID: accommodation.keyStringAccommodationEntity,
                        memberID: member.keyStringMemberEntity,
                        roomnumber: room.roomnumber,
                        housenumber: room.housenumber,
                        firstname: member.firstname,
                        lastname: member.lastname,
                        telephone: member.telephone,
                        email: member.email,
                        subject: report.subject,
                        message: report.message,
                        date: reportarepair,
                        statusreportarepair: 'unread'
                    },
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Send message success',
                        template: 'Please wait for the response from lessor.'
                    });
                    $state.go('menu.home', { memberID: member.keyStringMemberEntity }, { reload: false });
                }, function (error) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Connection Failed',
                        template: 'Please check your network connection.'
                    });
                });
                // Close Save Report a Repair
            }
            // Close Function Report a Repair

            // Open Member List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.member = response.data;
            }, function (error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connection Failed',
                    template: 'Please check your network connection.'
                });
            });
            $scope.member = {};
            // Close Member List

            // Open Rental List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/findRental.do?rentalID=" + rentalID,
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rental = response.data;
            });
            $scope.rental = {};
            // Close Rental List

            // Open Accommodation List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/accommodationList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.accommodations = response.data;
            });
            $scope.accommodations = [];
            // Close Accommodation List

            // Open Room List
            $http({
                method: 'GET',
                url: "http://2-dot-pjpnd-166013.appspot.com/roomList.do",
                cache: false,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                $scope.rooms = response.data;
            });
            $scope.rooms = [];
            // Close Room List

        }])

    .controller('signUpCtrl', ['$scope', '$stateParams', '$http', '$filter', '$state', '$ionicPopup',
        function ($scope, $stateParams, $http, $filter, $state, $ionicPopup) {
            // Open Function Registor
            $scope.signup = function (register, getbirthdate) {

                var birthdate = $filter('date')(getbirthdate, 'yyyy-MM-dd');

                // Open Save Member
                $http({
                    method: "POST",
                    url: "http://2-dot-pjpnd-166013.appspot.com/saveMember.do",
                    crossDomain: true,
                    data: {
                        username: register.username,
                        password: register.password,
                        firstname: register.firstname,
                        lastname: register.lastname,
                        gender: register.gender,
                        birthdate: birthdate,
                        address: register.address,
                        occupation: register.occupation,
                        telephone: register.telephone,
                        email: register.email
                    },
                    headers: { 'Content-Type': 'application/json' }
                }).then(function (response) {
                    var check = response.data;
                    if (check == 1) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Sign up Success',
                            template: 'Welcome to pak nhai dee application'
                        });
                        $state.go('signIn', null, { reload: false });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Sign up Failed',
                            template: 'Username is already taken'
                        });
                    }
                }, function (error) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Connection Failed',
                        template: 'Please check your network connection.'
                    });
                });
                // // Close Save Member
            }
            // Close Function Registor

        }])

    .controller('menuCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup', '$timeout', '$ionicHistory', '$window',
        function ($scope, $stateParams, $http, $state, $ionicPopup, $timeout, $ionicHistory, $window) {
            // Get Parameter
            var memberID = $stateParams.memberID;

            if (memberID == null || memberID == '') {

            } else {
                // Open Member List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/findMember.do?memberID=" + memberID,
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    $scope.member = response.data;
                }, function (error) {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Connection Failed',
                        template: 'Please check your network connection.'
                    });
                });
                $scope.member = {};
                // Close Member List

                // Open Rental List
                $http({
                    method: 'GET',
                    url: "http://2-dot-pjpnd-166013.appspot.com/rentalList.do",
                    cache: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(function (response) {
                    $scope.rentals = response.data;
                });
                $scope.rentals = [];
                // Close Rental List
            }

            // Open Function Sign Out
            $scope.logout = function () {
                $state.go('signIn');

                $timeout(function () {
                    $window.location.reload(true);
                    //$ionicHistory.clearCache();
                }, 0)
            }
            // Close Function Sign Out

            // Open Onload
            $scope.doRefresh = function () {
                $timeout(function () {
                    $window.location.reload(true);
                    //Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');

                }, 200);
            };
            // Close Onload

        }])