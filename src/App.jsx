import styles from "./App.module.css";
import "./global.css";
function App() {
  return (
    <div className={styles.container}>
      <header className={styles.appHeader}>
        <h1>Top Anime</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.box}>
          <h1 className={styles.animeTitle}>One Piece</h1>
          <img
            src={"/images/one-piece.jpg"}
            alt="One Piece"
            className={styles.animeImage}
          />
          <h3 className={styles.animeDescription}>
            An epic saga of adventure on the high seas, the original manga
            follows the adventures of Luffy, an enthusiastic young man with the
            singular aspiration of becoming King of the Pirates.
          </h3>
        </div>

        <div className={styles.box}>
          <h1 className={styles.animeTitle}>Demon Slayer</h1>
          <img
            src={"/images/demon-slayer.jpg"}
            alt="Demon Slayer"
            className={styles.animeImage}
          />
          <h3 className={styles.animeDescription}>
            t follows Tanjiro Kamado, a young boy living in Taisho-era Japan who
            becomes the sole survivor of his family after demons kill them. He
            then sets out to save his sister Nezuko who has transformed into a
            demon.
          </h3>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
