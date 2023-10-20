import { useEffect, useState } from "react"
import axios from "axios"


export const Procurar = () =>{

    const [produtos, setProdutos] = useState();
    const [pnome, setPnome] = useState();
    const [id, setId] = useState();
    const [preco, setPreco] = useState();

    const [nome,setNome] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.get(`http://127.0.0.1:5000/produto/${nome}`)
        .then(({data})=>{
            setId(data.id)
            setPreco(data.preco)
            setPnome(data.nome)
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const removerProduto = (id) =>{
        axios.delete(`http://127.0.0.1:5000/produto/${id}`)
        axios.get('http://127.0.0.1:5000/produtos')
        .then(({data})=>{
            setProdutos(data)
        })
    }
    return(
        <>
        <div className="bg-gray-500 text-gray-200 px-10 py-5">
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input type="text" className="text-black"  onChange={(e)=>{setNome(e.target.value)}}placeholder="Nome do Produto" name="" id="" />
                <button type="submit"> Pesquisar</button>
            </form>

            {id ? 
            <>
            <div>{id} - {pnome} - {preco}</div>
            </> 
            :
            <h1 className="text-lg">Produto não encontrado</h1>
            
            }
         </div>
        </>
    )
}


