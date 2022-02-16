
const Engineer = require ('../lib/Engineer');

test ('creates engineer object', () => {
    const engineer = new Engineer ('Lloyd', 1, 'llting592@gmail.com', 'llting592');
    expect(engineer.github).toEqual(expect.any(String));
});

//gets github from getGithub() in Engineer.js
test('gets github name', ()=>{
    const engineer = new Engineer ('Lloyd', 1, 'llting592@gmail.com', 'llting592');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets employee role', () => {
    const engineer = new Engineer ('Lloyd', 1, 'llting592@gmail.com', 'llting592');
    expect(engineer.getRole()).toEqual('Engineer');
});
