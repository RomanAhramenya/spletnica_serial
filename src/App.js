import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./component/header/Header";
import Navigation from "./component/navigation/Navigation";

function App() {
  const [season, setSeason] = useState(1);
  const [serias, setserias] = useState(1);

  useEffect(() => {
    const localSeason = localStorage.getItem("season");
    const localSerias = localStorage.getItem("serias");
    if (localSeason) {
      setSeason(localSeason);
      setserias(Number(localSerias));
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Navigation
        season={season}
        setSeason={setSeason}
        setserias={setserias}
        serias={serias}
      />
      <div className="frame">
        <button onClick={() => setserias(serias - 1)}>prev</button>
        <iframe
          id="iframeName"
          width={600}
          height={400}
          src={`https://voidboost.net/embed/308625?s=${season}&e=${serias}&vsleft=-1000`}
          allowFullScreen
        />

        <button onClick={() => setserias(serias + 1)}>next</button>
      </div>
    </div>
  );
}

export default App;
