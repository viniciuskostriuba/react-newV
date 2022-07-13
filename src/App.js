import React, { useState, useEffect } from "react";

function App() {

  const [tarefas, setTarefas] = useState(['Pagar','Estudar']);

  const [input, setInput] = useState([]);

  function handleAdd() { 
    setTarefas([...tarefas, input])
    setInput('');
  }

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
if(tarefasStorage) {
  setTarefas(JSON.parse(tarefasStorage));
}

      }, []);

  useEffect(() => {
localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);


    return(
      <div>
        <ul>
          {tarefas.map((tarefa)  => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button type="button" onClick={handleAdd}>Adicionar</button>
      </div>
    );
}

export default App;

// cmd() {
//   let state = this.state;
  
//     if(this.timer != null) {
//       clearInterval(this.timer);
//       this.timer = null;
//       state.cmdText = 'START';
//     } else {
//       this.timer = setInterval(() => {
//         let cu = this.state;
//         cu.time += 0.1;
//         this.setState(cu);
//       },100)
//       state.cmdText = 'STOP';
//     }
//     this.setState(state);
//   } 
  
//   reset() {
  
//       clearInterval(this.timer);
//       let state = this.state;
//       state.time = 0;
//       this.timer = null;
//       state.cmdText = 'START';
//       this.setState(state);
//   }
  
  
  
//       render() {
//           return(
//               <div>
//                 <text>{this.state.time.toFixed(1)}</text> <br/>
//                 <button onClick={this.cmd}>{this.state.cmdText}</button>
//                 <button onClick={this.reset}>RESET</button>
//               </div>
//           )
//       }