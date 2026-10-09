
function Greeter(props){
  
  const {name , age} = props;

  if (age == "18") {
    return (
      <p>Whats up brother {name}!</p>
    );
  }
  else {
    return (
      <p>What up {name}!</p>
    );
  }

  
}

function App(props){
  return(
    <div>
        <Greeter />

        <Greeter name="Mario" age="18" />
        <Greeter name="Marcin" age ="19" />

    </div>
  );
}

export default App
