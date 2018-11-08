angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



      .state('signIn', {
        url: '/signin',
        cache: false,
        templateUrl: 'templates/signIn.html',
        controller: 'signInCtrl'
      })

      .state('menu.home', {
        url: '/home:memberID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('resultApartment', {
        url: '/result-apartment:memberID:typeofaccommodation:typeofapartment:rentrates:depositrates:district:province:fan:airconditioner:waterheater:refrigerator:television:furniture:carpark:closedcircuitcamera:elevator:washingmachine:drinkingwaterdispenser:swimmingpool:fitness:keycard',
        cache: false,
        templateUrl: 'templates/resultApartment.html',
        controller: 'resultApartmentCtrl'
      })

      .state('resultHouse', {
        url: '/resulthouse:memberID:typeofaccommodation:rentrates:depositrates:district:province:fan:airconditioner:waterheater:refrigerator:television:furniture:carpark:closedcircuitcamera',
        cache: false,
        templateUrl: 'templates/resultHouse.html',
        controller: 'resultHouseCtrl'
      })

      .state('detailAccommodation', {
        url: '/detailaccommodation:accommodationID:memberID',
        cache: false,
        templateUrl: 'templates/detailAccommodation.html',
        controller: 'detailAccommodationCtrl'
      })

      .state('detailRoom', {
        url: '/detailroom:accommodationID:roomID:memberID:rentalID:statusrental',
        cache: false,
        templateUrl: 'templates/detailRoom.html',
        controller: 'detailRoomCtrl'
      })

      .state('menu.notification', {
        url: '/notification:memberID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/notification.html',
            controller: 'notificationCtrl'
          }
        }
      })

      .state('menu.accountInfo', {
        url: '/accountinfo:memberID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/accountInfo.html',
            controller: 'accountInfoCtrl'
          }
        }
      })

      .state('menu.changePassword', {
        url: '/changepassword:memberID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/changePassword.html',
            controller: 'changePasswordCtrl'
          }
        }
      })

      .state('menu.accommodationInfo', {
        url: '/accommodationinfo:memberID:rentalID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/accommodationInfo.html',
            controller: 'accommodationInfoCtrl'
          }
        }
      })

      .state('menu.rentHistory', {
        url: '/renthistory:memberID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/rentHistory.html',
            controller: 'rentHistoryCtrl'
          }
        }
      })

      .state('menu.detailRent', {
        url: '/detailrent:memberID:rentalinvoiceID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/detailRent.html',
            controller: 'detailRentCtrl'
          }
        }
      })

      .state('menu.paymentBooking', {
        url: '/paymentbooking:memberID:rentalID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/paymentBooking.html',
            controller: 'paymentBookingCtrl'
          }
        }
      })

      .state('menu.bookingStatus', {
        url: '/bookingstatus:memberID:rentalID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/bookingStatus.html',
            controller: 'bookingStatusCtrl'
          }
        }
      })

      .state('menu.statusStay', {
        url: '/statusstay:memberID:rentalID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/statusStay.html',
            controller: 'statusStayCtrl'
          }
        }
      })

      .state('menu.reportARepair', {
        url: '/reportarepair:memberID:rentalID',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/reportARepair.html',
            controller: 'reportARepairCtrl'
          }
        }
      })

      .state('signUp', {
        url: '/signup',
        cache: false,
        templateUrl: 'templates/signUp.html',
        controller: 'signUpCtrl'
      })

      .state('menu', {
        url: '/side-menu21:memberID',
        cache: false,
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

    $urlRouterProvider.otherwise('/signin')



  });