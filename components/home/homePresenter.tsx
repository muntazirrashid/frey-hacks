import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './home.module.scss';

const Presenter = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>

        <div className={styles.pitch}>
          <h1>Find the the Ice Cream</h1>
          <h1>Flavours According to your Mood</h1>
          <p>It is just click away from you</p>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>CREATE
            </Button>
            <Button>OR</Button>
            <Button>FIND</Button>
          </ButtonGroup>
        </div>

      </div>
    </section>
  );
};

export default Presenter;
