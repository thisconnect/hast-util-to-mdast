'use strict'

module.exports = base

function base(h, node) {
  if (!h.baseFound) {
    h.frozenBaseUrl = node.properties.href || null
    h.baseFound = true
  }
}
