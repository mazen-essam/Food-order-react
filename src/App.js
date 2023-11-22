import Context from "./Context";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Menu from "./components/meals/Menu";

function App() {
   return (
      <Context>
         <main>
            <Navbar />
            <div className="container">
               <Header />
               <Menu />
            </div>
         </main>
      </Context>
   );
}

export default App;
