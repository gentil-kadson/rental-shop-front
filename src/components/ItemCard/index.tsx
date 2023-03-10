import styles from "./index.module.css";
import AddToCartButton from "../AddToCartButton";
import { useState } from "react";

type ItemCardProps = {
  name: string;
  price: number;
  available: boolean;
  image: string;
};

export default function ItemCard({
  name,
  price,
  available,
  image,
}: ItemCardProps) {
  const [availability, setAvailability] = useState<boolean>(available);
  const [actionButton, setActionButton] = useState<string>(
    availability ? "cart" : "rented"
  );

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.cardWrapper}>
        <div className={styles.imageAndNameWrapper}>
          <div className={styles.itemImageWrapper}>
            <img className={styles.image} src={image} alt="ps2 image" />
          </div>
          <span className={styles.itemName}>{name}</span>
        </div>
        <div className={styles.priceAndAvailabilityWrapper}>
          <span className={styles.price}>R$ {price}</span>
          <span
            className={styles.availability}
            style={{ color: available ? "#0C3CE5" : "#EB1414" }}
          >
            {available ? "Disponível" : "Indisponível"}
          </span>
        </div>
      </div>
      {actionButton === "cart" ? (
        <AddToCartButton
          actionButton={actionButton}
          availability={availability}
          setActionButton={setActionButton}
          setAvailability={setAvailability}
        />
      ) : (
        <button>Enviar</button>
      )}
    </div>
  );
}
