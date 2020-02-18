/**
 * Generate random string.
 * @param count Byte count.
 */
function gen (count: number = 1) {
  let out = ''
  for (let i = 0; i < count; i++) {
    out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return out
}

/**
 * Generate RFC GUID https://www.ietf.org/rfc/rfc4122.txt.
 */
export default function guid () {
  return [gen(2), gen(), gen(), gen(), gen(3)].join('-')
}
