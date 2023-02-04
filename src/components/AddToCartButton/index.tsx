import styles from "./index.module.css";
import { ShoppingCart } from "phosphor-react";

export default function AddToCartButton() {
  return (
    <button className={styles.addToCartButton}>
      <div>
        <ShoppingCart color="white" size={20} />
      </div>
      <span>Adicionar ao carrinho</span>
    </button>
  );
}
