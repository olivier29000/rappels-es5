var ville=['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

ville.forEach(element => {
    console.log(element)
});

console.log(ville.every(function (params) {
    return params.indexOf('a')>-1
}))

function contientOuPas(tableau,lettre) {
    return tableau.every(function (params) {
        return params.indexOf(lettre)>-1
    })
}
console.log(contientOuPas(ville,'l'));


console.log(ville.some(function (params) {
    return params.indexOf('-')>-1
}))

var villesSansTiretSansEspace = ville.filter(function (params) {
    console.log(params, !(params.indexOf('-')>-1) &&  !(params.indexOf(' ')>-1))
    return !(params.indexOf('-')>-1) &&  !(params.indexOf(' ')>-1)
})

console.log(villesSansTiretSansEspace)

var villesMajusculeSeTerminantParS = ville.filter(function name(params) {
    console.log(params, params.substr(params.length-1)=='s')
    return params.substr(params.length-1)=='s'
}).map(function (params) {
    return params.toUpperCase()
})

console.log(villesMajusculeSeTerminantParS)