import axios from 'axios'; // biblioteca q  faz a conexao coma API

export const api = axios.create({ //abre conexao com api
    baseURL: 'http://localhost:8000' //url base da aplicacao -> baseURL ( caixa alta )
})

export const busca = async(url, setDado) => { //arrow function async
    const reposta = await api.get(url); // await -> esperar a resposta da API | api.get(url) -> pegar dados
    setDado(reposta.data);
}