function songs(input) {

    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist;
            this.name = name;
            this.time = time;
        }

        print() {
            console.log(this.name);
        }
    }

    let numberOfSongs = input.shift();
    let desiredPlaylist = input.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {

        let currentInput = input[i];
        let currentArray = currentInput.split("_");
        let currentSong = new Song(currentArray[0], currentArray[1], currentArray[2]);
        songs.push(currentSong);
    }

    for (let start of songs) {
        if (desiredPlaylist === "all") {
            start.print();
        } else if (start.playlist === desiredPlaylist) {
            start.print();
        }
    }
}
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);