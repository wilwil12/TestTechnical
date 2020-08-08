let Nana = 12.00
let KecepatanN = 7
let Angela = 13.00
let KecepatanA = 10
let detik = 3600
let susul = 60 / (KecepatanA - KecepatanN)
hitung = () => {
    let NanaRange = (detik * KecepatanN) * 3
    let AngelaRange = (detik * KecepatanA) * 2
    let jumlahRange = NanaRange + AngelaRange
    let Papasan = jumlahRange / (KecepatanN + KecepatanA)
    let jumlah = Papasan / detik
    let round = Math.round(jumlah)
    console.log(`Pada pukul ${Angela + round + '.' + susul.toPrecision(2)} Mereka Berada pada titik yang sama `)
}
hitung()