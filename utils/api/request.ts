/**
 * Add default predefined options to request.
 * @param {object} options Reqeust options.
 *
 * @returns {string}
 */
export function addDefaultOptions (options: Object): RequestInit {
  const newOptions = {
    redirect: 'follow',
    mode: 'cors',
    referrer: 'no-referrer',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    ...options
  }
  return newOptions as RequestInit
}

/**
 * Add base URL to route.
 * @param {string} url Route.
 *
 * @returns {string}
 */
export function addBaseURL (url: string, baseURL: string | undefined = process.env.BASE_URL || '') {
  if (url.includes('http') === false) {
    return baseURL + url
  }
  return url
}

/**
 * Handle HTTP request errors.
 * @param {object} response Response object.
 */
function handleErrors (response: Response) {
  if (!response.ok) {
    throw response
  }
  return response
}

/**
 * Handle JSON.
 * @param {object} response Response.
 */
function handleJSON (response: Response) {
  return response.json()
}

/**
 * Make a request.
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function request (url: string, options: Object) {
  return fetch(addBaseURL(url), addDefaultOptions(options))
    .then(handleErrors)
    .then(handleJSON)
}

/**
 * Make a PUT request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function put (url: string, options = Object.create(null)) {
  return request(url, { ...options, method: 'PUT' })
}

/**
 * Make a POST request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function post (url: string, options = Object.create(null)) {
  return request(url, { ...options, method: 'POST' })
}

/**
 * Make a PATCH request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function patch (url: string, options = Object.create(null)) {
  return request(url, { ...options, method: 'PATCH' })
}

/**
 * Make a DELETE request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function del (url: string, options = Object.create(null)) {
  return request(url, { ...options, method: 'DELETE' })
}

/**
 * Make a GET request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function get (url: string, options = Object.create(null)) {
  return request(url, { ...options, method: 'GET' })
}
