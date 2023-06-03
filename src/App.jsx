import Hero from "./components/Hero";
import MusicRelease from "./components/MusicRelease";
import Show from "./components/Show";

function App() {
  return (
    <>
      <Hero />
      <div id="music">
        <h1 className="sectionTitle">music</h1>
        <MusicRelease
          title="deja vu - EP"
          img={{
            src: "src/assets/images/DejaVu.png",
            alt: "deja vu cover"
          }}
          isReleased={false}
        ></MusicRelease>
        <div className="epAnnouncement">Our debut release, deja vu to be released soon</div>
      </div>
      <div id="media">
          <h1 className="sectionTitle">media</h1>
          <img src="src/assets/images/collageHpn.jpg" alt="collage of the band" className="collageBandPic"></img>
      </div>
      <div id="merch">
          <h1 className="sectionTitle">merch</h1>
          <h2>first merch release in the near future, come back soon!</h2>
      </div>
      <div id="live">
          <h1 className="sectionTitle">live</h1>
          <h2>upcoming shows</h2>
          <div className="showsWrapper">
            <Show
              date="10 june 2023"
              venue="carport"
              location="boyds"
              isPaid={false}
              link=""
            />
            <Show
              date="11 june 2023"
              venue="Highland Arts Theatre"
              location="Sydney, NS"
              isPaid={true}
              link=""
            />
          </div>
          
      </div>
      <div id="contact">
      
      </div>
    </>
  )
}

export default App;