import request from './network.js'
import {
  oldBaseURL,
  newBaseURL,
} from './config.js'
export function getCategory() {
  return request({
    url: oldBaseURL + '/api/v2/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: oldBaseURL + '/api/v2/subcategory',
    data: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({ 
    url: oldBaseURL + '/api/v2/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}