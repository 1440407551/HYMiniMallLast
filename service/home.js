import request from './network.js'
import {
  oldBaseURL,
  newBaseURL,
} from './config.js'

export function getMultiData() {
  return request({
    url: oldBaseURL + '/home/multidata'
  })
} 

export function getProduct(type, page) {
  return request({
    url: oldBaseURL + '/api/v2/home/data',
    data: {
      type,
      page
    }
  })
}