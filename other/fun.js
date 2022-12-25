/**
 * 
 * @param {String} first 
 * @param {String} last 
 * @returns first + last
*/
function FullName(first, last) {
    let full = first + " " + last
    // console.log(full);
    return full
}
// FullName('ahmad', 'al ali')

function Car(num, first, last, y) {
    let name = FullName(first, last)
    let all = name + " : " + num
    console.log(all);
    return all
}

// Car(1598658, 'ahmad', 'al ali')
function AnlString(text, num) {
    let String = {
        // length: text.length,
        // slice: text.slice(0, 9),
        // slice2: text.slice(0, -2),
        // slice3: text.slice(0, text.indexOf('d')),
        // replace: text.replace('mods', 'pro'),
        // replaceAll: text.replaceAll('s', '@'),

        // toUpperCase: text.toUpperCase(),
        // toLowerCase: text.toLowerCase(),
        // trim: text.trim(),
        // trimStart: text.trimStart(),
        // trimEnd: text.trimEnd(),
        // padStart: text.padStart (4, " "),
        toString: num.toString(),
        charAt: text.charAt(0),
        charCodeAt: text.charCodeAt(0),
        text1: text[0],
        text1: text.split(' '),
        search: text.search('Apps'),
    }
    console.log(String);
    return String
}

AnlString('Apps Mods full', 231)