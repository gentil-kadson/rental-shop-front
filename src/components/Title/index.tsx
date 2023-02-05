import styles from "./styles.module.css"

interface TitleProps {
    title: string
}

export default function Title({ title }: TitleProps) {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
        </>
    )
}