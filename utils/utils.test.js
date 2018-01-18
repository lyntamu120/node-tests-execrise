const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });


        it ('should asyncAdd two numbers (correct way)', (done) => {
            utils.asyncAdd(1, 1, (sum) => {
                expect(sum).toBe(2).toBeA('number');
                done();
            });
        });
    });

    describe('#require', () => {
        it('should square a number', () => {
            var res = utils.square(4);
            expect(res).toBe(16).toBeA('number');
        });

        it ('should asyncSquare a number', (done) => {
            utils.asyncSquare(3, (res) => {
                expect(res).toBe(9).toBeA('number');
                done();
            })
        });
    });

    it('should expect some values', () => {
        expect({
            name: 'Lyn',
            age: 25,
            location: 'Philadelphia'
        }).toInclude({
            age: 25
        });
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
