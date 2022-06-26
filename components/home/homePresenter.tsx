import Button from '@mui/material/Button';
import styles from './home.module.scss';

const Presenter = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>
        <video
          src="/assets/a-group-of-people-have-their-eyes-focused-on-a-laptop-screen-3248784.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className={styles.pitch}>
          <h1>Find the the Ice Cream</h1>
          <h1>Flavours According to your Mood</h1>
          <p>It is just click away from you</p>
          <Button variant="contained">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Presenter;
