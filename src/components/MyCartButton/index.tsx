import styles from "./index.module.css";

type MyCartButtonProps = {};

export default function MyCartButton() {
  return (
    <button className={styles.myCartButton}>
      <span>Fechar alugel</span>
    </button>
  );
}
