describe('removeAllVowels Filter', () => {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(($filter) => {
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should correctly remove vowels', () => {

		expect(removeAllVowels('bastard')).toEqual('bstrd')
		expect(removeAllVowels('garreirrorraurriorreerrrrur')).toEqual('grrrrrrrrrrrrrrr')

	})
});
