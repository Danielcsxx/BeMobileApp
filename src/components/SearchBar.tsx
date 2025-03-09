import React from "react";
import styled from "styled-components";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const Main = styled.div`
    display: flex;
    padding: 18px 0px;
    margin: 22px 0px;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
    color: #1C1C1C;
    font-weight: bold;

    @media (max-width: 768px) {
        margin: 0px 0px 32px;
    }
`;

const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 287px;

    @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
}
`;

const SearchInput = styled.input`
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 8px 12px 8px 8px;
    font-size: 16px;
    border: 1px solid #DDD;
    outline: none;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 400px;
    }
`;

const SearchIcon = styled.img`
    position: absolute;
    right: 12px;
    width: 26px;
    height: 26px;
    pointer-events: none;
`;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <Main>
            <Title>
                Funcionários
            </Title>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Pesquisar"
                    onChange={(event) => onSearch(event.target.value)}

                />
                <SearchIcon src={`/img/SearchIcon.png`}/>
            </SearchContainer>
        </Main>
    );
}

export default SearchBar;