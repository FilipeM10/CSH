import { useState } from 'react'

interface Lista {
  index: number
  item: string
}

interface ListaEstrutural {
  lista: Lista[]
  editObj: {
    index?: number
    item: string
  }
}

const App = () => {
  const [nome, setNome] = useState('')
  const [edit, setEdit] = useState('')
  const [editInterfaceHide, setEditInterfaceHide] = useState(false)
  const [list, setList] = useState<ListaEstrutural['lista']>([])
  const itemObj: Partial<ListaEstrutural['editObj']> = {}

  function editar(index: number, item: string) {
    setEdit(item)
    itemObj.index = index
    itemObj.item = item

    console.log(itemObj)

    setEditInterfaceHide(true)
  }

  return (
    <>
      <div className="container">
        <input type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button onClick={() => setList([...list, { index: list.length, item: nome }])}>Click</button>


        <ol>
          { list.map((item, index) => <li key={index}>{item.item}<button onClick={() => setList(list.filter((_, i) => i !== index))}>Excluir</button><button onClick={() => editar(index,item.item)}>Editar</button></li>) }
        </ol>

        {
          editInterfaceHide && (
            <>
              <label htmlFor="edit">Editar</label>
              <input type="text"
                id="edit"
                value={edit}
                onChange={(e) => setEdit(e.target.value)}
              />
            </>
          )
        }

      </div>
    </>
  )
}

export default App