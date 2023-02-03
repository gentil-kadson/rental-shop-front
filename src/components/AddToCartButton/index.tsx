import styles from "./index.module.css";

export default function AddToCartButton() {
  return (
    <button className={styles.addToCartButton}>
      <div></div>
      <span>Adicionar ao carrinho</span>
    </button>
  );
}
