import React, { useState } from "react";
import styled from "styled-components";
import { Employee } from "../types/Employee";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { formatDate, formatPhone } from "../utils/formatters";


interface EmployeeCardProps {
    employee: Employee;
    isOpen: boolean;
    toggle: () => void;
}

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  background: #FFF;
  width: 100%;
  max-width: 400px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const CardDiv = styled.div`
  display: flex;
  align-items: center;
`;

const CellMobileDiv = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #DDD;
    }
`;

const CellMobile = styled.div`
  padding: 6px;
  font-size: 14px;
  font-weight: bold;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const CellImageMobile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center; 
`;

const CellMobileInfos = styled.div`
  padding: 6px;
  font-size: 14px;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const EmployeeName = styled.h3`
  flex-grow: 1;
  font-size: 18px;
  margin: 0;

    @media (max-width: 768px) {
        margin-left: 26px;
    }
`;

const EmployeeDetails = styled.div`
  margin-top: 12px;
  padding: 8px;
  border-top: 1px solid #DDD;
  margin-bottom: 12px;
`;

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, isOpen, toggle }) => {
    return (
        <CardContainer>
            <CardHeader onClick={toggle}>
                <CardDiv>
                    <CellImageMobile
                        src={`/img/${employee.name.toLowerCase()}.png`}
                        alt={employee.name}
                    />
                    <EmployeeName>{employee.name}</EmployeeName>
                </CardDiv>
                {isOpen ? <FaChevronUp size={22} /> : <FaChevronDown size={22} />}
            </CardHeader>

            {isOpen && (
                <EmployeeDetails>
                    <CellMobileDiv>
                        <CellMobile>Cargo:</CellMobile>
                        <CellMobileInfos>{employee.job}</CellMobileInfos>
                    </CellMobileDiv>

                    <CellMobileDiv>
                        <CellMobile>Data de admissão:</CellMobile>
                        <CellMobileInfos>{formatDate(employee.admission_date)}</CellMobileInfos>
                    </CellMobileDiv>

                    <CellMobileDiv>
                        <CellMobile>Telefone:</CellMobile>
                        <CellMobileInfos>{formatPhone(employee.phone)}</CellMobileInfos>
                    </CellMobileDiv>
                </EmployeeDetails>
            )}
        </CardContainer>
    );
};

const EmployeeList: React.FC<{ employees: Employee[] }> = ({ employees }) => {
    const [openUserIndex, setOpenUserIndex] = useState<number | null>(null);

    const handleToggle = (userIndex: number) => {
        setOpenUserIndex(openUserIndex === userIndex ? null : userIndex);
    };

    return (
        <>
            {employees.map((employee, userIndex) => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    isOpen={openUserIndex === userIndex}
                    toggle={() => handleToggle(userIndex)}
                />
            ))}
        </>
    );
};

export default EmployeeList;