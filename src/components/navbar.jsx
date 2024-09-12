import React from 'react';
import '../css/Produtos.css';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>EcoFinder</h1>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Procure seu produto" />
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Componente ProductForm
const ProductForm = () => {
  return (
    <div className="form-container">
      <div className="lado-esquerdo">
        <h2>Adicione a foto do produto</h2>
        <div className="imagem-upload">
          {/* Simulação da área de upload */}
          <div className="imagem-placeholder">Upload de Imagem</div>
        </div>
      </div>

      <div className="lado-direito">
        <div className="tarefa">
          <h3>Nome do produto</h3>
          <input type="text" placeholder="Adicione o nome do produto" />
        </div>

        <div className="tarefa">
          <h3>Empresa responsável</h3>
          <select>
            <option value="" disabled selected>Selecione a empresa</option>
            <option value="empresaX">Empresa X</option>
            <option value="empresaY">Empresa Y</option>
          </select>
        </div>

        <div className="tarefa">
          <h3>Categoria do produto</h3>
          <select>
            <option value="" disabled selected>Selecione a categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
          </select>
        </div>

        <div className="tarefa">
          <h3>Nível do produto</h3>
          <select>
            <option value="" disabled selected>Nível do produto</option>
            <option value="ausente">Ausente</option>
            <option value="leve">Leve</option>
            <option value="moderado">Moderado</option>
            <option value="critico">Crítico</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Componente Principal App
const App = () => {
  return (
    <div>
      <NavBar />
      <ProductForm />
    </div>
  );
};

export default App;
