describe('Favorite Food Filter', () => {
	let $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(($filter) => {
		favoriteFood = $filter('favoriteFood');
	}));

	it('should filter correctly by favourite food',
		() => {
			let people = [{
				name: 'Jeff',
				favoriteFood: 'eggs'
			}, {
				name: 'Cynthia',
				favoriteFood: 'marmoset'
			}, {
				name: 'Spangly Clive',
				favoriteFood: 'booze'
			}, {
				name: 'Clara',
				favoriteFood: 'eggs'
			}]

			expect(favoriteFood(people, 'eggs')[0].name).toBe('Jeff')
			expect(favoriteFood(people, 'booze')[0].name).toContain('Clive')
			expect(favoriteFood(people, 'eggs').length).toBe(2)
			expect(favoriteFood(people, 'marmoset').length).toBe(1)

		})

});
