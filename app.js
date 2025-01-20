// Create the AngularJS application module
var app = angular.module('libraryApp', []);

// Create the controller for the library
app.controller('LibraryController', function($scope) {
    // Define the initial data structure for library categories
    $scope.library = [
        { category: 'Fiction', count: 120 },
        { category: 'Non-Fiction', count: 80 },
        { category: 'Science', count: 150 },
        { category: 'Mathematics', count: 70 }
    ];

    // Variable to handle new category inputs
    $scope.newCategoryName = '';
    $scope.newCategoryCount = 0;
    $scope.categoryExists = false;

    // Function to add a new category
    $scope.addCategory = function() {
        // Check if the category already exists
        var exists = false;
        for (var i = 0; i < $scope.library.length; i++) {
            if ($scope.library[i].category.toLowerCase() === $scope.newCategoryName.toLowerCase()) {
                exists = true;
                break;
            }
        }

        if (exists) {
            $scope.categoryExists = true; // Show warning
        } else {
            // If the category is unique, add it to the library
            $scope.library.push({
                category: $scope.newCategoryName,
                count: $scope.newCategoryCount
            });

            // Reset the form fields
            $scope.newCategoryName = '';
            $scope.newCategoryCount = 0;
            $scope.categoryExists = false;
        }
    };
});