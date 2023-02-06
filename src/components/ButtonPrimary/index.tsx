import React, { ReactNode } from "react"

import styles from "./styles.module.css"

interface ButtonPrimaryProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    title: string
    icon?: ReactNode 
}

export default function ButtonPrimary({ title, icon }: ButtonPrimaryProps) {
    return (
        <>
            <button className={styles.buttonPrimary}>
                {icon}
                {title}
            </button>
        </>
    )
}