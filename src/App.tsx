import FormsGenerate from './components/FormsGenerate.tsx'
import { useState } from 'react'

interface Lista {
  id: string
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
  const [editInterfaceHide, setEditInterfaceHide] = useState(false)
  const [list, setList] = useState<ListaEstrutural['lista']>([])
  const itemObj: Partial<ListaEstrutural['editObj']> = { index: undefined, item: "" }

  function estruturaEdit(index: number, item: string) {
    itemObj.index = index
    itemObj.item = item

    setEditInterfaceHide(true)
  }

  function editar(value: string, items: { index?: number, item?: string }) {
    if (items.index === undefined) return;
    const indexArr = items.index - 1

    const newList = list.map((it, id) => {
      if (id === indexArr) {
        return { id, item: value }
      }
      return it
    })

    console.log(newList)

    setEditInterfaceHide(false)
    // finalizar depois
  }

  return (
    <>
      <div className="container">
        <FormsGenerate
          typeForm='post'
          postEvent={(value) => { setList([...list, { id: crypto.randomUUID(), item: value }]) }}
        />


        <ol>
          {list.map((item, index) => <li key={index}>{item.item}<button onClick={() => setList(list.filter((_, i) => i !== index))}>Excluir</button><button onClick={() => estruturaEdit(index, item.item)}>Editar</button></li>)}
        </ol>

        {
          editInterfaceHide && (
            <>
              <FormsGenerate
                typeForm='edit'
                inputEdit={itemObj.item}
                editEvent={(inputItemValue) => editar(inputItemValue, itemObj)}
              />
            </>
          )
        }

      </div>
    </>
  )
}

export default App