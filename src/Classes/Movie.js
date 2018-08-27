class Movie {
    constructor(title = "", genre = "", releaseDate = "", watched = false) {
        this.title = title;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.watched = watched;
    }
}

export default Movie;