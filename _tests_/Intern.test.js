const Intern = require ('../lib/Intern');

test ('creates intern object', () => {
    const intern = new Intern ('Lloyd', 1, 'llting592@gmail.com', 'UCLA');
    expect(intern.school).toEqual(expect.any(String));
});

//gets school from getSchool in Intern.js
test('gets school name', ()=>{
    const intern = new Intern ('Lloyd', 1, 'llting592@gmail.com', 'UCLA');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employee role', () => {
    const intern = new Intern ('Lloyd', 1, 'llting592@gmail.com', 'UCLA');
    expect(intern.getRole()).toEqual('Intern');
});
