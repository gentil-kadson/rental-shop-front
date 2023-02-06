import ButtonPrimary from "@/components/ButtonPrimary";
import Header from "@/components/Header";
import ItemCard from "@/components/ItemCard";
import Title from "@/components/Title";

import styles from "../styles/locador.module.css"

type Item = {
    nome: string;
    preco: number;
    disponivel: boolean;
    foto: string;
};

const examples = [
    { id: 1, nome: "Console", preco: 500, disponivel: true, foto: "/playstation_2.png" },
    { id: 2, nome: "Xbox", preco: 800, disponivel: false, foto: "/playstation_2.png" },
    { id: 3, nome: "Playstation", preco: 100, disponivel: true, foto: "/playstation_2.png" },
    { id: 4, nome: "Playstation", preco: 802, disponivel: false, foto: "/playstation_2.png" },
    { id: 5, nome: "Playstation", preco: 100, disponivel: true, foto: "/playstation_2.png" },
    { id: 6, nome: "Playstation", preco: 100, disponivel: true, foto: "/playstation_2.png" },
]

export default function Locador() {
    return (
        <>
            <Header /> 

            <section className={styles.sectionAvailableItems}>
                <Title title="Itens disponíveis" />

                <div className="itemCardContainer">
                    {
                        examples.map(example => (
                            <ItemCard 
                                name={example.nome}
                                price={example.preco}
                                available={example.disponivel}
                                image={example.foto}
                                key={example.id}
                            />
                        ))
                    }
                </div>

            </section>

        </>
    )
}