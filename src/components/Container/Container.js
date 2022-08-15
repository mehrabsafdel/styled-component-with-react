import styled from 'styled-components';

const Center = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Container = ({children}) => {
    return (
        <Center>
            {children}
        </Center>
    )

}

export default Container;