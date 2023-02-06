import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

import styles from "./styles.module.css"

export default function Checkbox() {
    return (
        <>
            <div className={styles.checkboxContainer}>
                <RadixCheckbox.Root className={styles.checkboxRoot}>
                    <RadixCheckbox.Indicator className={styles.checkbox}>
                        <Check 
                            size={20}
                            color="#FFF"
                        />
                    </RadixCheckbox.Indicator>

                </RadixCheckbox.Root>    

                <span>Item disponível</span>
            </div>
        </>
    )
}