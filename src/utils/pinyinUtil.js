const data = require('./cn2py.json')
    //汉字转拼音
export const cn2py = str => {
    if (!str) return;
    for (const i in data) {
        if (data.hasOwnProperty(i)) {
            const element = data[i]
            if (element.cnName == str) {
                return element.pyName;
            }
        }
    }
}