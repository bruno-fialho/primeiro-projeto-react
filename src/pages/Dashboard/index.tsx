import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/45835631?s=460&u=478bcb878c00650819d8319d9df5b84e2ebd79e8&v=4"
            alt="Bruno"
          />
          <div>
            <strong>primeiro-projeto-rocket</strong>
            <p>Bootcamp Gostack - Módulo 03</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/45835631?s=460&u=478bcb878c00650819d8319d9df5b84e2ebd79e8&v=4"
            alt="Bruno"
          />
          <div>
            <strong>primeiro-projeto-rocket</strong>
            <p>Bootcamp Gostack - Módulo 03</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/45835631?s=460&u=478bcb878c00650819d8319d9df5b84e2ebd79e8&v=4"
            alt="Bruno"
          />
          <div>
            <strong>primeiro-projeto-rocket</strong>
            <p>Bootcamp Gostack - Módulo 03</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
