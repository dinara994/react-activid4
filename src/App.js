import './App.css';
import Starwars from "./Starwars";
import Inform from "./Inform";
import Pokemon from "./Pokemon";
import PokemonGame from "./PokemonGame";
import Header from "./Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
//'as' переименоввает ^

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Route exact path='/'><Pokemon /></Route>
                <Route path='/inform'> <Inform /></Route>
                <Route path='/pokemon'> <Pokemon /></Route>
                <Route path='/pokemongame'><PokemonGame /></Route>
                <Route path='/starwars'><Starwars /></Route>
            </Router>

</div>
);
}

export default App;
