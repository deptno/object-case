import {camelCase as camel, snakeCase as snake} from 'change-case'

export function camelCase<T>(a: T): T {
  const type = typeof a
  if (Array.isArray(a)) {
    return a.map(camelCase) as any as T
  } else if (type === 'object' && a !== null) {
    return camelCaseObject(a)
  } else if (type === 'string') {
    return camel(a as any) as any as  T
  } else {
    return a
  }
}
export function snakeCase<T>(a: T): T {
  const type = typeof a
  if (Array.isArray(a)) {
    return a.map(snakeCase) as any as T
  } else if (type === 'object' && a !== null) {
    return snakeCaseObject(a)
  } else if (type === 'string') {
    return snake(a as any) as any as T
  } else {
    return a
  }
}

function camelCaseObject<T>(a: T): T {
  const ret = {} as T
  for (let key in a) {
    const value = a[key]
    if (Array.isArray(value)) {
      ret[camel(key)] = value.map(camelCase)
    } else if (value !== null && typeof value === 'object') {
      ret[camel(key)] = camelCaseObject(value)
    } else {
      ret[camel(key)] = value
    }
  }
  return ret
}
function snakeCaseObject<T>(a: T): T {
  const ret = {} as T
  for (let key in a) {
    const value = a[key]
    if (Array.isArray(value)) {
      ret[snake(key)] = value.map(snakeCase)
    } else if (value !== null && typeof value === 'object') {
      ret[snake(key)] = snakeCaseObject(value)
    } else {
      ret[snake(key)] = value
    }
  }
  return ret
}
