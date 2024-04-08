function gramophone(band, album, song) {


    let songDurationInSeconds = (album.length * band.length) * song.length / 2;

    let fullRotations = songDurationInSeconds / 2.5;

    console.log(`The plate was rotated ${Math.ceil(fullRotations)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');