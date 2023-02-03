import Image from "next/image";

export default function Header() {
    return (
        <Image 
            src="/logo.svg"
            alt="Imagem de um console retrô na cor preta."
            width={79}
            height={79}
        />
    )
}