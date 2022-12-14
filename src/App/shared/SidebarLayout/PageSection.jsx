import styled from 'styled-components';

const StyledSection = styled.div`
    min-height: 100vh;
    padding: 8vh 10%;
`

export const PageSection = ({ children, id }) => {
    return <StyledSection id={id}>
        {children}
    </StyledSection>
}