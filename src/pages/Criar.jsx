import axios from "axios"
import { useState } from "react"

export const Criar = () =>{
    
    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [id, setId] = useState()



    const adicionar = ()=>{
        axios.post("http://127.0.0.1:5000/produtos", {
            id: id,
            nome,
            preco,
        }, {
            headers:{
                "Content-Type": "application/json"
            }
        })
    }

    return(
        <>
        <div>
            <form onSubmit={adicionar}   className="bg-gray-500 p-10 flex text-center flex-col gap-2">
                <h1 className=" text-lg">Produto</h1>
                <input type="number"  placeholder="Id" onChange={(e)=>{setId(parseInt(e.target.value))}} name="id" id="" />
                <input type="text"  placeholder="Nome" onChange={(e)=>{setNome(e.target.value)}} name="Nome" id="" />
                <input type="number" onChange={(e)=>{setPreco(e.target.value)}} name="preco"  placeholder="Preço"  />
                <button type="submit" className=" p-1">Adicionar</button>
            </form>
        </div>
        </>
    )
}


