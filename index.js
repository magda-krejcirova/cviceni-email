const rozlouceniElm = document.querySelector(".email__closing")
const predmetElm = document.querySelector(".email__subject")
const bodyElm = document.querySelector(".email__body")

const fillSubject = (predmet) => {
    predmetElm.textContent=`${predmet}`
}

// const goodbye = (autor) => {
//     rozlouceniElm.textContent=`Na shledanou ${autor}`
// }

const fillBody = (telo, autor) => {
    bodyElm.textContent = telo
    rozlouceniElm.textContent=`Na shledanou ${autor}`
    
}
// let jmeno = prompt("Zadej jmeno")
// let subject = prompt("Zadej predmet dopisu")

jmeno = "Magda Krejcirova"
subject = "Urazka na cti"
body = "To co jste so dovolili pri jednani se zakaznikem, tedy vuci me osobe, je opravdu nehoraznost a do nebe volajici troufalost. Pokud by se vami zvoleny pristup mel jeste jednou opakovat, poslu stiznost az k nevyssim mistum, tj. ...."

//goodbye(jmeno)
fillSubject(subject)
fillBody(body, jmeno)