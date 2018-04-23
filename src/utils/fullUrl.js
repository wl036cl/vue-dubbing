/**
 * Author:ll36
 * Create Time:2018/04/16 14:04
 * Descripttion:
 */

export const getUrl = function (url) {
  if (!url) {
    return ''
  }
  if (url.indexOf('http') === 0) {
    return url
  }

  if (url.indexOf('/') !== 0) {
    url = '/' + url
  }

  return (/[mp4|mov]$/.test(url) ? process.env.VIDEO_URL : process.env.IMG_URL) + url
}
