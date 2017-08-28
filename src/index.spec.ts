import {camelCase, snakeCase} from './'

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
    const bitcoin = {
      "bithumb": {
        "ticker": [
          {
            "opening_price": "4900000",
            "closing_price": "4905000",
            "min_price": "4852000",
            "max_price": "4959000",
            "average_price": "4903985.2252",
            "units_traded": "8986.03593449",
            "volume_1day": "8986.03593449",
            "volume_7day": "127711.19528702",
            "buy_price": "4899000",
            "sell_price": "4905000",
            "date": "1503832027820",
            "null_test": null,
            "undefined_test": undefined,
            "boolean_false_test": false,
            "boolean_true_test": true,
            "number_0_test": 0,
            "number_1_test": 1,
          }
        ]
      }
    }
    camelCase(bitcoin)
    expect(camelCase(bitcoin)).toEqual({
      "bithumb": {
        "ticker": [
          {
            "openingPrice": "4900000",
            "closingPrice": "4905000",
            "minPrice": "4852000",
            "maxPrice": "4959000",
            "averagePrice": "4903985.2252",
            "unitsTraded": "8986.03593449",
            "volume_1day": "8986.03593449",
            "volume_7day": "127711.19528702",
            "buyPrice": "4899000",
            "sellPrice": "4905000",
            "date": "1503832027820",
            "nullTest": null,
            "undefinedTest": undefined,
            "booleanFalseTest": false,
            "booleanTrueTest": true,
            "number_0Test": 0,
            "number_1Test": 1,
          }
        ]
      }
    })

  })
  it('snake_case', () => {
    const tNum    = 1
    const tString = 'camelCase'
    const tObject = {
      snake_key: 1,
      camel_key:  'immune',
    }
    const tArray  = [tNum, tString, tObject]

    expect(snakeCase(tNum)).toBe(1)
    expect(snakeCase(tString)).toBe('camel_case')
    expect(snakeCase(tObject)).toEqual({
      snake_key: 1,
      camel_key: 'immune'
    })
    expect(snakeCase(tArray)).toEqual([
      1,
      'camel_case',
      {
        snake_key: 1,
        camel_key: 'immune'
      }
    ])
  })
})