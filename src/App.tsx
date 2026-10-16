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

function Book(props : BookProps) {
  const { imageUrl, title, year, pages } = props;

  return (
    <div style={{ textAlign: "center", width: "180px" }}>
      <img src={imageUrl} alt={title} style={{ width: "150px", height: "220px"}} />
      <h3>{title}</h3>
      <p>Rok wydania: {year}</p>
      <p>Liczba stron: {pages}</p>
    </div>
  );
}

function Movie(props : MovieProps) {
  const { imageUrl, title, year, director } = props;

  return (
    <div style={{ textAlign: "center", width: "180px" }}>
      <img src={imageUrl} alt={title} style={{ width: "150px", height: "220px"}} />
      <h3>{title}</h3>
      <p>Rok premiery: {year}</p>
      <p>Reżyser: {director}</p>
    </div>
  );
}

function MusicAlbum(props: MusicAlbumProps) {
  const { imageUrl, albumName, bandName, genre, year, songs } = props;

  return (
    <div style={{ 
      textAlign: "center", 
      width: "240px", 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "15px", 
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#fff"
    }}>
      <img src={imageUrl} alt={albumName} style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{albumName}</h3>
      <p style={{ fontWeight: "bold" }}>{bandName}</p>
      <p>Gatunek: {genre}</p>
      <p>Rok: {year}</p>
      <div style={{ textAlign: "left", borderTop: "1px solid #ffffff", paddingTop: "8px" }}>
          <p style={{ fontWeight: "bold", textAlign: "center" }}>Lista piosenek:</p>
          <ul style={{ paddingLeft: "15px", margin: 0 }}>
          {songs.map((song, index) => (
            <li key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <span>{song.title}</span>
              <span>{song.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        <Movie 
            imageUrl="minionki.jpg" 
            title="Minionki" 
            year={2015}
            director="Kyle Balda, Pierre Coffin" 
          />
        <Movie 
            imageUrl="minecraft.jpg"
            title="Minecraft: Film"
            year={2025}
            director="Jared Hess"
        />
        <Movie 
            imageUrl="shrek.jpg"
            title="Shrek"
            year={2001}
            director="Andrew Adamson, Vicky Jenson"
          />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        <Book 
            imageUrl="ZbrodniaKara.jpg"
            title="Zbrodnia i kara"
            year={1866}
            pages={416}
          />
        <Book 
            imageUrl="PanTadeusz.jpg"
            title="Pan Tadeusz"
            year={1834}
            pages={340}
          />
        <Book 
            imageUrl="Potop.jpg"
            title="Potop"
            year={1886}
            pages={930}
          />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
            <MusicAlbum 
              imageUrl="FF.jpg"
              albumName="FF"
              bandName="Młody West"
              genre="Hip-Hop / Rap"
              year={2026}
              songs={[
                { title: "Rozdział 1(INTRO)", duration: "2:45" },
                { title: "Bezsens", duration: "2.35" },
                { title: "Jak zawsze", duration: "2:18" },
                { title: "Jestem w piekle", duration: "4:18" },
                { title: "prezydent", duration: "3:22" },
                { title: "Bez promo", duration: "4:10" },
                { title: "100 Tysiecy", duration: "1:56" },
                { title: "KLT INTERLUDE", duration: "2:13" },
                { title: "KULT", duration: "3:15" }
              ]}
            />
      
            <MusicAlbum 
              imageUrl="Von.jpg"
              albumName="Welcom to O'Block"
              bandName="King Von"
              genre="Rap"
              year={2020}
              songs={[
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
              ]}
            />
      </div>
    </div>
  
  );
}

export default App;