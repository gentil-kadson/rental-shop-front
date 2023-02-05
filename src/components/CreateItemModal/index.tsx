import * as Dialog from '@radix-ui/react-dialog';
import { Plus } from 'phosphor-react';
import ButtonPrimary from '../ButtonPrimary';

import styles from "./styles.module.css"

export default function CreateItemModal() {
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger type="button" className={styles.buttonPrimary}>
                    <Plus />
                    Cadastrar item
                </Dialog.Trigger>

                <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay} />
                <Dialog.Content className={styles.content}>
                    <Dialog.Title title='Cadastrar item' />
                    <Dialog.Close />

                    <fieldset className={styles.fieldset}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder='Fulano' id='name' />
                    </fieldset>

                    <fieldset className={styles.fieldset}>
                        <label htmlFor="price">Preço(R$)</label>
                        <input type="number" placeholder='R$ 20,00' id='price' />
                    </fieldset>

                    <ButtonPrimary title='Salvar' />
                </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}