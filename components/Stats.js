import styles from "@/styles/components/Stats.module.scss";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MoodIcon from "@mui/icons-material/Mood";
import SchoolIcon from "@mui/icons-material/School";

function Stats(props) {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <MoodIcon style={{ fontSize: 50 }} />
        <div className={styles.row}>
          <p>11</p>
          <p>années d&apos;expérience</p>
        </div>
      </div>
      <div className={styles.col}>
        <DirectionsCarIcon style={{ fontSize: 50 }} />
        <div className={styles.row}>
          <p>12 K</p>
          <p>Voiture lavées</p>
        </div>
      </div>
      <div className={styles.col}>
        <SchoolIcon style={{ fontSize: 50 }} />
        <div className={styles.row}>
          <p>30</p>
          <p>Salariés qualifiés</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
