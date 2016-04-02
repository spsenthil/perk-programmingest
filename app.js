/**
 * Created by prakash on 4/2/16.
 */

'use strict';

// declare modules


angular.module('PerkSample', ['angularUUID2'])
    .directive('pwCheck', [function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                var firstPassword = '#' + attrs.pwCheck;
                elem.add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                        // console.info(elem.val() === $(firstPassword).val());
                        ctrl.$setValidity('pwmatch', elem.val() === $(firstPassword).val());
                    });
                });
            }
        }
    }])
.controller('APIController', ['$scope','uuid2', function($scope,UUID) {

        $scope.storeForSession=function ( users ) {
            localStorage.setItem('users', JSON.stringify( users||[]));
        };

        function getUsers() {

            var users=[];
            var sessionUsers=localStorage.getItem('users');
            if(!sessionUsers) {
                var userResponse = usersResponse;
                if ( userResponse.status === "success" ) {
                    users = userResponse.data.users;
                }
                //$scope.storeForSession( users );
            }else{

                users=JSON.parse(sessionUsers);
            }
            return users;
        }


        $scope.initUserList=function (  ) {
            this.users=getUsers();
            $scope.users= this.users;

        };




        $scope.currentEditRecord=null;

        $scope.editUser=function ( editId ) {
            var editUser=$scope.getUser(editId);
            if(editUser){
                $scope.currentEditRecord=editUser;
                $scope.currentModalMode='edit';
            }else{

            }
        };

        $scope.createUser=function ( editId ) {

            $scope.currentEditRecord={};
            $scope.currentModalMode='add';

        };

            $scope.reset = function(form) {

                $scope.currentEditRecord={};
                $scope.currentModalMode=null;
                if (form) {
                    form.$setPristine();
                    form.$setUntouched();
                }
            };
    


        $scope.getUser=function ( id ) {

            var usersById=this.users.filter(function ( user ) {
                return user.id===id;
            });
            if(usersById.length>0)
            {
                return usersById[0];
            }
            else {
                return null;
            }

        };

        $scope.saveOrUpdateUser=function (user) {

            var userList=getUsers();

            function findWithAttr(array, attr, value) {
                for(var i = 0; i < array.length; i += 1) {
                    if(array[i][attr] === value) {
                        return i;
                    }
                }
            } 


            if($scope.currentModalMode==="" || $scope.currentModalMode==="add" )
            {
                //Save new with uuid
                $scope.currentEditRecord.id=UUID.newguid();

                userList.push(angular.copy($scope.currentEditRecord))
            }
            else
            {

                var currentRecordIndex=findWithAttr(userList,'id',$scope.currentEditRecord.id);
                if(currentRecordIndex)
                {
                    userList[currentRecordIndex]=$scope.currentEditRecord;//Just replace at the index.
                }
            }


            $scope.storeForSession(userList);

            $scope.initUserList();//Refresh


        };

        //
        $scope.initUserList();


    }])



