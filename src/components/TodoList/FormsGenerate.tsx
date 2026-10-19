import { useState } from "react";

interface IFormProp {
    typeForm: "post" | "edit"
    inputEdit?: string
    postEvent?: (inpt: string) => void
    editEvent?: (inpt: string) => void
    editInput?: (inpt: string) => string
}


const FormsGenerate = ({ typeForm, inputEdit = "", postEvent, editEvent }: IFormProp) => {
    const [valueInput, setValueInput] = useState(inputEdit)

    function eventForm() {
        if (typeForm === 'post') postEvent?.(valueInput);
        else if (typeForm === 'edit') editEvent?.(valueInput);
    } // o ?. é algo que diz: "a função só executa se não for undefined"

    return (
        <>
            <div className="container-form">
                <label htmlFor={typeForm}>{typeForm === 'post' ? 'Adicionar' : typeForm === 'edit' ? 'Editar' : undefined}</label>
                <input type="text"
                    id={typeForm}
                    value={valueInput}
                    onChange={(event) => setValueInput(event.target.value)}
                />
                <button onClick={eventForm}>{typeForm === 'post' ? 'Adicionar' : typeForm === 'edit' ? 'Editar' : undefined}</button>
            </div>
        </>
    )
}

export default FormsGenerate