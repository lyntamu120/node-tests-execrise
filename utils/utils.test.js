const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
});

it('should expect some values', () => {
    // expect(12).toNotBe(11);
    // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
    // expect([1,2,3]).toExclude(10);
    expect({
        name: 'Lyn',
        age: 25,
        location: 'Philadelphia'
    }).toInclude({
        age: 25
    });
});

it ('should verify first and last names are set', () => {
    var user = {age: 25};
    var strName = 'Xining Wang';
    var res = utils.setNmae(user, strName);

    expect(res)
        .toBeA('object')
        .toInclude({
            firstName: "Xining",
            lastName: "Wang"
        })
        .toEqual(user);
});
