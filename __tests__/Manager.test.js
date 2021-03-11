const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
     const manager = new Manager('Mr Krabs', '12345', 'eugine@krustykrab.com', '001');

     expect(manager.mgrName).toBe('Mr Krabs');
     expect(manager.mgrID).toBe('12345');
});