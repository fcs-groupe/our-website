import styles from "@/styles/components/Partners.module.scss";

function Partners(props) {
  return (
    <div className={styles.container}>
      {Array.from("12345").map((_, i) => {
        return (
          <div key={i}>
            <img alt={`partner-${_}`} src={`/images/partner${_}.png`} />
          </div>
        );
      })}
    </div>
  );
}

export default Partners;
