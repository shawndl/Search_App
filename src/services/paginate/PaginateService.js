import chunk from 'lodash/chunk'

/**
 * returns the paginated results and number of pages
 * @param page
 * @param take
 * @param items
 * @return {*}
 */
export const paginate = (page, take, items) => {
  const chunks = chunk(items, take)
  return chunks[page - 1]
}
