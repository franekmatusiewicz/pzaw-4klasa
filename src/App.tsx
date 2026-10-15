// function Greeter(props){
  
//   const {name , age} = props;

//   if (age == "18") {
//     return (
//       <p>Whats up brother {name}!</p>
//     );
//   }
//   else {
//     return (
//       <p>What up {name}!</p>
//     );
//   }

  
// }

// function App(props){
//   return(
//     <div>
//         <Greeter />

//         <Greeter name="Mario" age="18" />
//         <Greeter name="Marcin" age ="19" />

//     </div>
//   );
// }

// export default App

function Book(props) {
  const { imageUrl, title, year, pages } = props;

  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Rok wydania: {year}</p>
      <p>Liczba stron: {pages}</p>
    </div>
  );
}

function Movie(props) {
  const { imageUrl, title, year, director } = props;

  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Rok premiery: {year}</p>
      <p>Reżyser: {director}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Book 
        imageUrl="ZbrodniaKara.jpg" 
        title="Zbrodnia i kara" 
        year="1866" 
        pages="416" 
      />

      <Movie 
        imageUrl="minionki.jpg" 
        title="Minionki" 
        year="2015" 
        director="Kyle Balda, Pierre Coffin" 
      />
    </div>
  );
}

export default App;