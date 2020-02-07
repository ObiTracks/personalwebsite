import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Photography from './Components/Photography/Photography';
import Resume from './Components/Resume/Resume';
import About from './Components/About/About';

function App() {
  return (
      <div className="app">
        <div className="leftside">
          <Nav />
        </div>
        <div className="rightside">
          <Home />
          {/* <Projects />
          <Photography />
          <Resume />
          <About />
          <Footer /> */}
        </div>
      </div>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <div className="leftside">
//           <Nav />
//         </div>
//         <div className="rightside">
//           <Route path="/" exact component={Home} />
//           <Route path="/projects" exact component={Projects} />
//           <Route path="/photography" exact component={Photography} />
//           <Route path="/resume" exact component={Resume} />
//           <Route path="/about" exact component={About} />
//           <Footer />
//         </div>
//       </div>

//     </Router>
//   );
// }

// export default App;
