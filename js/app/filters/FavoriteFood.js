function FavoriteFood() {
	return function (people, food) {
		return people.filter(function (person) {
			return person.favoriteFood === food;
		});
	};
}

angular
	.module('app')
	.filter('favoriteFood', FavoriteFood);
