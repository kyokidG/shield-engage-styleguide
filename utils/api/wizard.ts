import { get } from './request'
/**
 * Get all entities.
 *
 * @param {number} formId Form ID.
 *
 * @returns {Promise}
 */
export function fetchConfig () {
  return get('/api/wizard')
}

export function fetchMoreCards () {
  return get('/api/ownership_cards')
}
