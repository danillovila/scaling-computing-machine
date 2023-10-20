import { useEffect, useState } from "react"
import axios from "axios"


export const Home = () =>{

    const [produtos, setProdutos] = useState([]);

    const removerProduto = (id) =>{
        axios.delete(`http://127.0.0.1:5000/produto/${id}`)
        axios.get('http://127.0.0.1:5000/produtos')
        .then(({data})=>{
            setProdutos(data)
        })
    }
    return(
        <>
        {
                useEffect(()=>{
                    axios.get('http://127.0.0.1:5000/produtos')
                    .then(({data})=>{
                        setProdutos(data)
                    })
                },[])
        }
        <ul>   
        {
            produtos.map(({nome, preco, id})=>(
                    <li key={id} >
                        <div className="flex p-1 items-center gap-x-3">
                        <p>{id} - {nome} - {preco}</p>
                        <button onClick={()=>{removerProduto(id), window.location.reload(false)}}>Remover</button>
                        </div>
                    </li> 
            ))
        }
        </ul>
        </>
    )
}


