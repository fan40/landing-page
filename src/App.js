import Articles from "./components/Articles";
import Header from "./components/Header";
import MidSection from "./components/MidSection";
import bg from "./images/landing.png"

function App() {

  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <main className=" h-screen w-screen " style={styles} >
      <Header />

      <div className="w-full xl:max-w-[1250px] mx-auto px-6 " >
        <MidSection />
        <Articles />
      </div>
    </main>
  );
}

export default App;
