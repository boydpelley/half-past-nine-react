import Hero from "./components/Hero";
import MusicRelease from "./components/MusicRelease";

function App() {
  return (
    <>
      <Hero />
      <div className="music">
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
      <div className="media">
          <h1 className="sectionTitle">media</h1>
      </div>
      <div className="merch">
      
      </div>
      <div className="live">
      
      </div>
      <div className="contact">
      
      </div>
    </>
  )
}

export default App;