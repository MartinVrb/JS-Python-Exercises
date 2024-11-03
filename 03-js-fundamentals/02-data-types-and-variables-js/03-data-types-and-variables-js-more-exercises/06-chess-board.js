function printChessboard(n) {
    let chessboard = '<div class="chessboard">\n';

    for (let i = 0; i < n; i++) {
        chessboard += '<div>\n';

        for (let j = 0; j < n; j++) {
            let cellClass = "";
            if ((i + j) % 2 === 0) {
                cellClass = 'black';
            } else {
                cellClass = 'white';
            }
            chessboard += `<span class="${cellClass}"></span>\n`;
        }

        chessboard += '</div>\n';
    }

    chessboard += '</div>';

    console.log(chessboard);
}
printChessboard(3);