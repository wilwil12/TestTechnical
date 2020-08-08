urutKata = (kata) => {
    if (kata === "") {
        return console.log('""')
    } else {
        return console.log(kata.split(" ").sort(function (a, b) {
            return (Number(a.match(/(\d+)/g)[0]) - Number((b.match(/(\d+)/g)[0])));
        }).join(" "))
    }
}
urutKata("ib2u in1i b3udi")
urutKata("ta3hun menjela2ng se1lamat b4aru")
urutKata("")