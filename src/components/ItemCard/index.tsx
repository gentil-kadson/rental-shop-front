import styles from "./index.module.css";
import Image from "next/image";

// type ItemCardProps = {
//   name: string;
//   price: number;
//   available: boolean;
//   image: string;
// };

export default function ItemCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageAndNameWrapper}>
        <span>Imagem do item</span>
        <span className={styles.itemName}>Nome do item</span>
      </div>
      <div className={styles.priceAndAvailabilityWrapper}>
        <span className={styles.price}>R$ 500,00</span>
        <span className={styles.availability}>Disponível</span>
      </div>
    </div>
  );
}
