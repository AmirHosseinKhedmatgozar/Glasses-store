import Footer from "../features/home/Footer";
import Main from "../features/home/Main";
import Header from "../features/home/Header";
import { ScrollProvider } from "../context/scrollContext";

function Home() {
  return (
    <div className="mt-5 pl-5 pr-5">
      <ScrollProvider>
        <Header />
        <Main />
        <Footer />
      </ScrollProvider>
    </div>
  );
}

export default Home;
