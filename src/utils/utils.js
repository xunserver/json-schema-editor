export const isObject = (o) => o && typeof o === "object";
export const isEmpty = (o) => {
  if (!isObject(o)) {
    if (typeof o === "string" && o.trim() === "") {
      return true;
    }
    if (o === 0 || Number.isNaN(o) || o === null || o === undefined) {
      return true;
    }
    return false;
  }

  return Object.entries(o).every(([_, v]) => isEmpty(v));
};

/**
 * 生成唯一key
 */
export const genKey = ((count) => prefix => `${prefix}_${count++}`)(0)

export const trimEmpty = (o) => {
  if(typeof o === 'string') {
    return o.trim()
  }
  if(isObject(o)) {
    if(Array.isArray(o)) {
      return o.filter((item) => !isEmpty(item))
    }
    Object.keys(o).forEach(key => {
      if(isEmpty(o[key])) {
        delete o[key]
      }
    })
    return o
  }

  return o
}