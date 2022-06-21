describe('My First Test', () => {
	it('Visits the initial project page', () => {
		cy.visit('/');
		cy.contains('Welcome');
		cy.contains('personal-website app is running!');
	});
});