import { StyledTitle } from "./styles";


const Title = ({type, text}) => {
    return (
        <StyledTitle type={type}>
            {text}
        </StyledTitle>
    )
}

export default Title;