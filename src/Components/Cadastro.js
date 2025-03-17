import { useState, useEffect } from 'react';

function Cadastro() {

    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Pagar a conta de luz",
        "Estudar Programação",
        "Enviar a tarefa"

    ]);

    const [nome, setNome] = useState('');
    const [corFundo, setCorFundo] = useState('white');

    useEffect(() => {
        let nomeSalvo = localStorage.getItem('pessoa');

        if (!nomeSalvo) {
            nomeSalvo = prompt("Qual é o seu nome?");
            if (nomeSalvo) {
                localStorage.setItem('pessoa', nomeSalvo);
            }
        }

        setNome(nomeSalvo);
    }, []);

    useEffect(() => {
        const corSalva = localStorage.getItem('@corFundo');
        if (corSalva) {
            setCorFundo(corSalva);
        }
    }, []);


    function mudarCor(novaCor) {
        setCorFundo(novaCor);
        localStorage.setItem('@corFundo', novaCor);
    }

    const tarefasStrorage = localStorage.getItem('@tarefa');

    useEffect(() => {

        if (tarefasStrorage) {
            setTarefas(JSON.parse(tarefasStrorage));
        }

    }, []);

    useEffect(() => {

        localStorage.setItem('@tarefa', JSON.stringify(tarefas));

    }, [tarefas]);

    function handleRegistro(e) {
        e.preventDefault();


        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div style={{ backgroundColor: corFundo, height: "100vh", padding: "20px" }} >
            <h1>{nome}, sua lista de tarefas</h1>
            <h1>Cadastro de Tarefas</h1>

            <form onSubmit={handleRegistro}>
                <label>Nome da tarefa: </label><br />
                <input placeholder='Digite uma Tarefa'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /><br />

                <button type='submit'>Registro</button>
            </form>
            <br /><br />

            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>

            <h2>Escolha uma cor de fundo:</h2>
            <div>
                <label>
                    <input type="radio" name="cor" value="white" onChange={() => mudarCor("white")} checked={corFundo === "white"} />Branco
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="cor" value="lightblue" onChange={() => mudarCor("lightblue")} checked={corFundo === "lightblue"} />Azul Claro
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="cor" value="lightgreen" onChange={() => mudarCor("lightgreen")} checked={corFundo === "lightgreen"} />Verde Claro
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="cor" value="lightgray" onChange={() => mudarCor("lightgray")} checked={corFundo === "lightgray"} />Cinza Claro
                </label>
            </div>
        </div>
    );
}
export default Cadastro;