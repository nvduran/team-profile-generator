const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
     const intern = new Intern('Spongebob', '12345', 'sponge@bob.com', 'boating school');

     expect(intern.intName).toBe('Spongebob');
     expect(intern.intEmail).toBe('sponge@bob.com');
});




