import {assert} from 'chai'
import {MathUtil} from '../src/js/math'

describe('MathUtil', function() {
    it('pi method should return 3.145', function() {
      assert.equal(3.145, MathUtil.pi());
    });
    it('calcArea method should return 6', function() {
      assert.equal(6, MathUtil.calcArea(2, 3));
    });
})