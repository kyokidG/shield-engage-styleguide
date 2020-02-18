import { get } from './request'
/**
 * Get all entities.
 *
 * @param {number} formId Form ID.
 *
 * @returns {Promise}
 */
export function all () {
  return get('/api/entities')
}
