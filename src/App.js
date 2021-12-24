import Button from "./components/Button";
import Header from "./components/Header";
import Info from "./components/Info";
import MainContent from "./components/MainContent";
import Social from "./components/Social";

//importing style
import './style/main.css'


function App() {
  return (
    <div className="App">
      
      <Header />
      <Info/>
      <Button/>
      <MainContent/>
      <Social/>
     
    </div>
  );
}

export default App;
