cetakGambar = (num) => {
    for (let row = 1; row <= num; row++) {
        let str = ""
        for (let colum = 1; colum <= num; colum++) {
            if (row === 1) {
                str += " + "
            } else if (row === 8) {
                str += " + "
            } else if (colum % 3 === 0) {
                str += " + "
            } else {
                str += " = "
            }
        }
        console.log(str)
    }
}
cetakGambar(8)