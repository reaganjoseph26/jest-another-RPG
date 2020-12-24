const { TestScheduler } = require('jest');
const Potion = require('../lib/Potion.js');
test('creates a health potion object', ()  => {
    const potion = new Potion('health')
    expect(potion.value).toEqual(expect.any(Number))
})