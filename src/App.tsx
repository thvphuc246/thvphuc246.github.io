import "./App.scss";
import Navbar from "components/Navbar";
import Header from "components/Header";
import About from "components/About";
import Knowledge from "components/Knowledge";
import Experience from "components/Experience";
import Achievement from "components/Achievement";
import Education from "components/Education";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header color="teal" />
      <About color="teal" />
      <Knowledge />
      <Experience />
      <Achievement />
      <Education />
      <Footer />
    </>
  );
}

export default App;
