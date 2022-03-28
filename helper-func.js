export function serialize (data) {
  let obj = {};
  for (let [key, value] of data) {
    obj[key] = value;
  }
  return obj;
}