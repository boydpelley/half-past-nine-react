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
        <h1 className="sectionTitle">contact</h1>
        <p>need to contact us?<br></br> send us an <a href="mailto:boyd@pelley.ca">email</a>! or a <a href="https://www.instagram.com/halfpastnineband/">dm</a>!</p>
        <a href="https://www.instagram.com/halfpastnineband/" id="instaLink"><img src="/src/assets/images/Instagram_Glyph_White.png" alt="instagram logo" id="instagramLogo"></img></a>
      </div>
      <footer>
        designed by <a href="https://www.instagram.com/boyd_pelley/">boyd pelley</a>
      </footer>
    </>
  )
}

export default App;