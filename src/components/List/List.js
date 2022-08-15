import styled from "styled-components";

const StyledUL = styled.ul`
    background-color: blueviolet;
    padding: 60px;
    margin: 20px;
    li {
        color: steelblue;
        div {
            width: 50px;
            height: 40px;
            background-color: yellow;
        }
    };
    border-radius: 15px;
`

const List = ({children}) => {

    return (
        <StyledUL>
            {children}
        </StyledUL>
    )
}

export default List;