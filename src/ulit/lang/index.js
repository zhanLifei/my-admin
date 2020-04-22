import en from './en'
import zh from './zh'

let messages = {
  'en-us': en,
  'zh-cn': zh
}

// 获取语言
let language = localStorage.getItem('lang') || 'zh-cn'
let supported = ['zh-cn', 'en-us']

if (supported.indexOf(language) < 0) {
  language = (navigator.language || navigator.browserLanguage).toLowerCase()
}

export const lang = language

function getTranslator () {
  function translate (key, options = {}) {
    const message = messages[lang] || {}
    let str = message[key]
    if (!str) {
      console.warn(key + ' 没有对应翻译')
      return ''
    }
    // 替换占位符
    for (let key in options) {
      let placeholder = `{${key}}`
      str = str.replace(placeholder, options[key])
    }
    return str
  }

  return translate
}

export default getTranslator()
