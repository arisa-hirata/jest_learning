const examples = require('./examples');
// const eventEmitter = require('event-emitter');
const getJson = require('./getJson');

it('これは試験です', () => {
  expect(1 + 3).toBe(4);
});

describe('math', () => {
  describe('getDistance()', () => {
    it('returns distance', () => {
      const p = { x: 0, y: 0 };
      const q = { x: 300, y: 400 };

      const result = examples.getDistance(p, q);
      expect(result).toBe(500);
    });
  });
});

describe('Tax calucration with 8% ', () => {
  it('returns price including tax', () => {
    const result = examples.addTax(100);
    expect(result).toBe(108);
  });
});

describe('capitalize', () => {
  it('capitalize', () => {
    const result = examples.capitalize('alpha');
    expect(result).toBe('Alpha');
  });

  it('emptyCapitalize', () => {
    const result = examples.capitalize('');
    expect(result).toBe('');
  });
});

describe('snakeToCamel', () => {
  it('snakeToCamel', () => {
    const result = examples.snakeToCamel('AA_aaaa');
    expect(result).toBe('AAAaaa');
  });

  it('emptySnakeToCamel', () => {
    const result = examples.snakeToCamel('');
    expect(result).toBe('');
  });

  it('calls back later', (done) => {
    expect.assertions(1);
    // 何かとても遅い非同期処理
    examples.doSomethingOld('foo', 123, (error, result) => {
      expect(result).toBe('foo123');
      done();
    });
  });
});

// describe('lalala', () => {
//   it('returns image file URL', async () => {
//     const json = require('./nw.getGitHubIcon.json');
//     getJson.mockReturnValue(json);

//     const result = await nw.getGitHubIcon('ginpei');
//     expect(result).toBe('https://avatars1.githubusercontent.com/u/355808?v=4');
//   });
// });
