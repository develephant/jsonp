
function stringify(js_obj) {
  return new Promise(function(resolve, reject) {
    try {
      let res = JSON.stringify(js_obj)
      resolve(res)
    }
    catch(err) {
      reject(err)
    }
  })
}

function pretty(js_obj) {
  return new Promise(function(resolve, reject) {
    try {
      let res = JSON.stringify(js_obj, null, "\t")
      resolve(res)
    }
    catch(err) {
      reject(err)
    }
  })
}

function parse(json_str) {
  return new Promise(function(resolve, reject) {
    try {
      let res = JSON.parse(json_str)
      resolve(res)
    }
    catch(err) {
      reject(err)
    }
  })
}

module.exports.stringify = stringify
module.exports.pretty = pretty
module.exports.parse = parse
