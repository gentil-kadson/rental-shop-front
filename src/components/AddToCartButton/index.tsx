import styles from "./index.module.css";
import { ShoppingCart } from "phosphor-react";

type AddToCartButtonProps = {
  actionButton: string;
  setActionButton: (value: string) => void;
  availability: boolean;
  setAvailability: (value: boolean) => void;
};

export default function AddToCartButton({
  actionButton,
  setActionButton,
  availability,
  setAvailability,
}: AddToCartButtonProps) {
  return (
    <button
      className={styles.addToCartButton}
      onClick={(event) => {
        setActionButton("rented");
        setAvailability(false);
      }}
    >
      <div>
        <ShoppingCart color="white" size={20} />
      </div>
      <span>Adicionar ao carrinho</span>
    </button>
  );
}
