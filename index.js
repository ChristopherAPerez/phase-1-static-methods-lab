class Formatter {
  static capitalize(string){
    let upperString = string.charAt(0).toUpperCase() + string.slice(1)
    return upperString
  }

  static sanitize(string){
    let filteredString = string.replace(/[^a-z0'-\s\.,]/gim, '')
    return filteredString
  }

  static titleize(string){
    let exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.toLowerCase().split(" ")

    let stringArrayCapitalize = stringArray.map(function(s){
      for(let i = 0; i < exemptWords.length; i++){
        if(exemptWords[i] === s){
          return s
        }
      }
      return s.charAt(0).toUpperCase() + s.slice(1)
    }).join(' ')

    stringArrayCapitalize = stringArrayCapitalize.charAt(0).toUpperCase() + stringArrayCapitalize.slice(1)

    return stringArrayCapitalize
  }
}
