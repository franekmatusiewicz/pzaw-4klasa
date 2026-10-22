interface BookProps {
  imageUrl: string;
  title: string;
  year: number;
  pages: number;
}

interface MovieProps {
  imageUrl: string;
  title: string;
  year: number;
  director: string;
  rating: number;
}

interface Song {
  title: string;
  duration: string;
}

interface MusicAlbumProps {
  imageUrl: string;
  albumName: string;
  bandName: string;
  genre: string;
  year: number;
  songs: Song[];
}

function Book({ imageUrl, title, year, pages }: BookProps) {
  return (
    <div style={{ textAlign: "center", width: "180px" }}>
      <img src={imageUrl} alt={title} style={{ width: "150px", height: "220px" }} />
      <h3>{title}</h3>
      <p>Rok wydania: {year}</p>
      <p>Liczba stron: {pages}</p>
      {year < 2000 && <p>Klasyka</p>}
    </div>
  );
}

function Movie({ imageUrl, title, year, director, rating }: MovieProps) {
  return (
    <div style={{ textAlign: "center", width: "180px" }}>
      <img src={imageUrl} alt={title} style={{ width: "150px", height: "220px" }} />
      <h3>{title}</h3>
      <p>Rok premiery: {year}</p>
      <p>Reżyser: {director}</p>
      <p>Ocena: {rating}/10</p>
      {rating >= 8 && <p>Polecany</p>}
    </div>
  );
}

function MusicAlbum({ imageUrl, albumName, bandName, genre, year, songs }: MusicAlbumProps) {
  return (
    <div style={{
      textAlign: "center",
      width: "240px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
    }}>
      <img src={imageUrl} alt={albumName} style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{albumName}</h3>
      <p style={{ fontWeight: "bold" }}>{bandName}</p>
      <p>Gatunek: {genre}</p>
      <p>Rok: {year}</p>
      <div style={{ textAlign: "left", borderTop: "1px solid #ffffff", paddingTop: "8px" }}>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>Lista piosenek:</p>
        {songs.length === 0 ? (
          <p>Brak utworów</p>
        ) : (
          <ul style={{ paddingLeft: "15px", margin: 0 }}>
            {songs.map((song, index) => (
              <li key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                <span>{index + 1}. {song.title}</span>
                <span>{song.duration}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function App() {
  const movies: MovieProps[] = [
    {
      imageUrl: "minionki.jpg",
      title: "Minionki",
      year: 2015,
      director: "Kyle Balda, Pierre Coffin",
      rating: 8
    },
    {
      imageUrl: "minecraft.jpg",
      title: "Minecraft: Film",
      year: 2025,
      director: "Jared Hess",
      rating: 7
    },
    {
      imageUrl: "shrek.jpg",
      title: "Shrek",
      year: 2001,
      director: "Andrew Adamson, Vicky Jenson",
      rating: 9
    },
    {
      imageUrl: "toyistory.webp",
      title: "Toy Story",
      year: 1995,
      director: "John Lasseter",
      rating: 8
    },
  ];

  const books: BookProps[] = [
    {
      imageUrl: "ZbrodniaKara.jpg",
      title: "Zbrodnia i kara",
      year: 1866,
      pages: 416
    },
    {
      imageUrl: "PanTadeusz.jpg",
      title: "Pan Tadeusz",
      year: 1834,
      pages: 340
    },
    {
      imageUrl: "Potop.jpg",
      title: "Potop",
      year: 1886,
      pages: 930
    }
  ];

  const albums: MusicAlbumProps[] = [
    {
      imageUrl: "FF.jpg",
      albumName: "FF",
      bandName: "Młody West",
      genre: "Hip-Hop / Rap",
      year: 2026,
      songs: [
        { title: "Rozdział 1(INTRO)", duration: "2:45" },
        { title: "Bezsens", duration: "2.35" },
        { title: "Jak zawsze", duration: "2:18" },
        { title: "Jestem w piekle", duration: "4:18" },
        { title: "prezydent", duration: "3:22" },
        { title: "Bez promo", duration: "4:10" },
        { title: "100 Tysiecy", duration: "1:56" },
        { title: "KLT INTERLUDE", duration: "2:13" },
        { title: "KULT", duration: "3:15" }
      ]
    },
    {
      imageUrl: "Von.jpg",
      albumName: "Welcom to O'Block",
      bandName: "King Von",
      genre: "Rap",
      year: 2020,
      songs: [
        { title: "Armed & Dangerous", duration: "2:45" },
        { title: "GTA", duration: "2.35" },
        { title: "Demon", duration: "2:18" },
        { title: "Mine Too", duration: "2:18" },
        { title: "The Code", duration: "4:22" },
        { title: "Why He Told", duration: "2:10" },
        { title: "Back Again", duration: "2:56" },
        { title: "Gleesh Place", duration: "2:43" },
        { title: "All These Niggas", duration: "2:15" },
        { title: "Can't Relate", duration: "2:15" },
        { title: "Mad at You", duration: "3:15" }
      ]
    }
  ];

  const sortedMovies = [...movies].sort((firstMovie, secondMovie) => {
    if (firstMovie.title < secondMovie.title) {
      return -1;
    }
    if (firstMovie.title > secondMovie.title) {
      return 1;
    }
    return 0;
  });
  const recentMovies = movies.filter((movie) => movie.year > 2010);
  const sortedBooks = [...books].sort((firstBook, secondBook) => {
    if (firstBook.title < secondBook.title) {
      return -1;
    }
    if (firstBook.title > secondBook.title) {
      return 1;
    }
    return 0;
  });
  const newestBooks = [...books].sort((a, b) => b.year - a.year);
  const sortedAlbums = [...albums].sort((firstAlbum, secondAlbum) => {
    if (firstAlbum.albumName < secondAlbum.albumName) {
      return -1;
    }
    if (firstAlbum.albumName > secondAlbum.albumName) {
      return 1;
    }
    return 0;
  });
  const albumsBySongCount = [...albums].sort((a, b) => b.songs.length - a.songs.length);
  const albumWithMostSongs = albumsBySongCount[0];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {sortedMovies.map((movie) => (
          <Movie
            key={movie.title}
            imageUrl={movie.imageUrl}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            rating={movie.rating}
          />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {sortedBooks.map((book) => (
          <Book
            key={book.title}
            imageUrl={book.imageUrl}
            title={book.title}
            year={book.year}
            pages={book.pages}
          />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {sortedAlbums.map((album) => (
          <MusicAlbum
            key={album.albumName}
            imageUrl={album.imageUrl}
            albumName={album.albumName}
            bandName={album.bandName}
            genre={album.genre}
            year={album.year}
            songs={album.songs}
          />
        ))}
      </div>

      <h2>Filmy wydane po 2010 roku</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {recentMovies.map((movie) => (
          <Movie
            key={movie.title}
            imageUrl={movie.imageUrl}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            rating={movie.rating}
          />
        ))}
      </div>

      <h2>Książki od najnowszej</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {newestBooks.map((book) => (
          <Book
            key={book.title}
            imageUrl={book.imageUrl}
            title={book.title}
            year={book.year}
            pages={book.pages}
          />
        ))}
      </div>

      <h2>Album z największą liczbą utworów</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        <MusicAlbum
          imageUrl={albumWithMostSongs.imageUrl}
          albumName={albumWithMostSongs.albumName}
          bandName={albumWithMostSongs.bandName}
          genre={albumWithMostSongs.genre}
          year={albumWithMostSongs.year}
          songs={albumWithMostSongs.songs}
        />
      </div>
    </div>
  );
}

export default App;
