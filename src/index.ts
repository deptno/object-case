import {camelCase as camel, snakeCase as snake} from 'change-case'

export const snakeCase = a => {
  const type = typeof a
  if (Array.isArray(a)) {
    return a.map(snakeCase)
  } else if (type === 'object') {
    return snakeCaseObject(a)
  } else if (type === 'string') {
    return snake(a)
  } else {
    return a
  }
}

const snakeCaseObject = a =>
  Object
    .entries(a)
    .reduce((ret, [key, value]) => {
      if (Array.isArray(value)) {
        ret[snake(key)] = value.map(snakeCase)
      } else if (typeof value === 'object') {
        ret[snake(key)] = snakeCaseObject(value)
      } else {
        ret[snake(key)] = value
      }
      return ret
    }, {})

export const camelCase = a => {
  const type = typeof a
  if (Array.isArray(a)) {
    return a.map(camelCase)
  } else if (type === 'object') {
    return camelCaseObject(a)
  } else if (type === 'string') {
    return camel(a)
  } else {
    return a
  }
}

const camelCaseObject = a =>
  Object
    .entries(a)
    .reduce((ret, [key, value]) => {
      if (Array.isArray(value)) {
        ret[camel(key)] = value.map(camelCase)
      } else if (typeof value === 'object') {
        ret[camel(key)] = camelCaseObject(value)
      } else {
        ret[camel(key)] = value
      }
      return ret
    }, {})

