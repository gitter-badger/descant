var topicTagsApp = angular.module('angular.directives.topictags', ['descant.services.tagservice']);

tagApp.directive('topicTags', function (tagService) {
	return {
		restrict: 'E',
		templateUrl: 'templates/topics/topic-tags.html',
		scope: {
			tagItems: '=',
		},
		controller: function ($scope) {
			this.tags = [];
			this.updateTags = function () {
				var i;
				for (i = 0; i < $scope.tagItems.length; i++) {
					var res = tagService.getTagInfo(parseInt($scope.tagItems[i]));
					var ctrl = this;
					res.then(function (data) {
						if (data != null) {
							ctrl.tags.push(data);
						}
					});

				}
			};

			this.updateTags();

		},
		controllerAs: 'tags'
	};
});