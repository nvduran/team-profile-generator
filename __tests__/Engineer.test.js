const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates manager object', () => {
     const engineer = new Engineer('Squidward', '12345', 'squid@krustykrab.com', 'squidhub');

     expect(engineer.engName).toBe('Squidward');
     expect(engineer.engGit).toBe('squidhub');
});