import Words from './words';

test('is a string', () => {
    expect(Words('Hola')).not.toBeNaN();
});