import Card from "./components/Card";
import Header from "./components/Header";
import Articles from "./components/Articles"
import Author from "./components/Author";
import Button from "./components/Button";



function App() {
return(
  <>
  <Header/>
  <Card/>
  <Card/>
  <Articles headline="Apr" content="Bal" date={2025}  author="xxxxx"/>
  <Articles headline="patriots" content="Bal" date={2024}  author="xxxxx"/>
  <Articles headline="reg" content="bal" date={2023}  author="xxxxx"/>
  <Author isLoggedIn = {true} username = "claude"/>
  <Button/>

  </>

 );
}

export default App;

