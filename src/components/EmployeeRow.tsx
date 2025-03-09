import React from "react";
import { Employee } from "../types/Employee";
import styled from "styled-components";
import { formatDate, formatPhone } from "../utils/formatters";

interface EmployeeRowProps {
    employee: Employee;
}

const EmployeeRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 2px 12px;
  border: 1px solid #EEE;
  width: 100%;
  background-color: #FFF;
  align-items: center;
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

const CellImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center; 
`;


const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {

    return (
        <EmployeeRowContainer>
            <Cell>
                <CellImage
                    src={`/img/${employee.name.toLowerCase()}.png`}
                    alt={employee.name}
                />
            </Cell>
            <CellName>{employee.name}</CellName>
            <Cell>{employee.job}</Cell>
            <Cell>{formatDate(employee.admission_date)}</Cell>
            <Cell>{formatPhone(employee.phone)}</Cell>

        </EmployeeRowContainer>
    );
}

export default EmployeeRow;