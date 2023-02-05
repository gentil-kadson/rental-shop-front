import ButtonPrimary from "@/components/ButtonPrimary";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { Plus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import CreateItemModal from "@/components/CreateItemModal";

export default function Locatario() {
    return (
        <>
            <Header />

            <Title title="Meus itens" />
            
            <CreateItemModal />
        </>
    )
}