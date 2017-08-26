import {camelCase, snakeCase} from '.'

describe('object-case', () => {
  it('camelCase', () => {
    const tNum    = 1
    const tString = 'snake_case'
    const tObject = {
      snake_key: 1,
      camelKey:  'immune',
    }
    const tArray  = [tNum, tString, tObject]

    expect(camelCase(tNum)).toBe(1)
    expect(camelCase(tString)).toBe('snakeCase')
    expect(camelCase(tObject)).toEqual({
      snakeKey: 1,
      camelKey: 'immune'
    })
    expect(camelCase(tArray)).toEqual([
      1,
      'snakeCase',
      {
        snakeKey: 1,
        camelKey: 'immune'
      }
    ])
  })
})