import styles from "@/styles/components/Grid.module.scss";

function Grid({ items }) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <div className={styles.col}>
            <img key={index} alt={item.title} src={item.img} />
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
