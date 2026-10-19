import FormsGenerate from './FormsGenerate.tsx'
import { useState } from 'react'

interface Item {
    id: string
    item: string
}

const TodoList = () => {
    const [list, setList] = useState<Item[]>([])
    const [editando, setEditando] = useState<Item | null>(null)

    function adicionar(value: string) {
        setList(prev => [...prev, { id: crypto.randomUUID(), item: value }])
    }

    function excluir(id: string) {
        setList(prev => prev.filter(it => it.id !== id))
        if (editando?.id === id) setEditando(null)
    }

    function editar(value: string) {
        if (!editando) return
        setList(prev =>
            prev.map(it => (it.id === editando.id ? { ...it, item: value } : it))
        )
        setEditando(null)
    }

    return (
        <div className="container">
            <FormsGenerate typeForm="post" postEvent={adicionar} />

            <ol>
                {list.map(it => (
                    <li key={it.id}>
                        {it.item}
                        <button onClick={() => excluir(it.id)}>Excluir</button>
                        <button onClick={() => setEditando(it)}>Editar</button>
                    </li>
                ))}
            </ol>

            {editando && (
                <FormsGenerate
                    key={editando.id}
                    typeForm="edit"
                    inputEdit={editando.item}
                    editEvent={editar}
                />
            )}
        </div>
    )
}


export default TodoList