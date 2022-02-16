const Manager = require ('../lib/Manager');

test ('creates manager object', () => {
    const manager = new Manager ('Lloyd', 1, 'llting592@gmail.com', 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//gets office number from  Manager.js
test('gets office number', ()=>{
    const manager = new Manager ('Lloyd', 1, 'llting592@gmail.com', 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employee role', () => {
    const manager = new Manager ('Lloyd', 1, 'llting592@gmail.com', 2);
    expect(manager.getRole()).toEqual('Manager');
});