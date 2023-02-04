import NextImage from "next/image";

import logo from "public/images/logo.png";

import styles from "./TitleLogoAndP.module.css";

interface TitleLogoAndPProps {
    pText: string;
}

export default function TitleLogoAndP({pText} : TitleLogoAndPProps) {
    return(
        <>
          <div className={styles.divTitleAndLogo}>

                <h1>Rental<b className={styles.titleShop}>Shop</b></h1>

                <NextImage 
                    src={logo}
                    alt="logo da rental shop"
                    className={styles.imageLogo}
                />
                
                <p>{pText}</p>

            </div>
        </>
    )
}