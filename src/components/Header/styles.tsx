import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: blue;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 40px;
`;
