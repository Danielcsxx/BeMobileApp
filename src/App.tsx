import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Employee } from './types/Employee';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeCard from './components/EmployeeCard';
import EmployeeRow from './components/EmployeeRow';


const Container = styled.div`
  width: 100%;
`;

const ContainerTable = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const EmployeeList = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  font-weight: bold;
  height: 52px;
  padding: 0px 20px;
  align-items: center;
  width: 100%;
  background-color: #0500FF;
  color: #FFFFFF; 
  border-radius: 12px 12px 0 0;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    position: relative;
  }
`;

const Cell = styled.div`
  padding: 6px;
  font-size: 14px;
`;

const CellName = styled.div`
  padding: 6px;
  font-size: 14px;

    @media (max-width: 768px) {
      margin-left: 10px;
    }
`;

const UserNotFind = styled.p`
  margin-top: 32px;
  font-size: 18px;
`;

const MobileContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileCircleIcon = styled.img`
  position: absolute;
  right: 21px;
  width: 14px;
  height: 14px;
  pointer-events: none;
`;

const DesktopContainer = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;


const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:3000/employees");
        if (!response.ok) throw new Error("Erro ao buscar os funcionários");

        const data: Employee[] = await response.json();

        setEmployees(data);
        setFilteredEmployees(data);
      } catch (error) {
        console.error("Erro ao carregar os funcionários: ", error);
      }
    };
    
    fetchEmployees();
  }, []);

  const filterEmployees = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredEmployees(employees);
      return;
    }

    const filtered = employees.filter(({ name, job, phone }) =>
      [name, job, phone].some(field =>
        field.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setFilteredEmployees(filtered);
  };

  return (
    <Container>
      <Header />
      <ContainerTable>

        <SearchBar onSearch={filterEmployees} />

        <DesktopContainer>
          <EmployeeList>
            <TableHeader>
              <Cell>FOTO</Cell>
              <Cell>NOME</Cell>
              <Cell>CARGO</Cell>
              <Cell>DATA DE ADMISSÃO</Cell>
              <Cell>TELEFONE</Cell>
            </TableHeader>

            {filteredEmployees.length > 0 ? (filteredEmployees.map((employee) => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))) : <UserNotFind>Funcionário não encontrado.. Tente novamente.</UserNotFind>}
          </EmployeeList>
        </DesktopContainer>

        <MobileContainer>
          <TableHeader>
            <Cell>FOTO</Cell>
            <CellName>NOME</CellName>
            <MobileCircleIcon src={`/img/MobileCircleIcon.png`}/>
          </TableHeader>
          <EmployeeCard employees={filteredEmployees} />
        </MobileContainer>

      </ContainerTable>
    </Container >
  );
}

export default App;