var n2w = require('../index');
var chai = require('chai').should();

describe('num to word', () => {
    it('should return the word representation of a number', () => {
        var word = n2w(2);
        return word.should.equal('two');
    });
    it('should return false if representation is not defined', () => {
        var word = n2w(18);
        return word.should.equal(false);
    });
    it('should return false if param is not a number', () => {
        var word = n2w("a");
        return word.should.equal(false);
    })
});
