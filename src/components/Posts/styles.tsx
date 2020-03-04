import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: #fcfcfc;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
`;

export const ContainerItemStory = styled.View`
    height: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`; 

export const ContainerPhoto = styled.View`
    background-color: #FF8C00;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`; 

export const Photo = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 28px;
    height: 28px;
    border-radius: 28px;
    border-width: 1px;
    border-color: #fff;
`; 

export const Name = styled.Text`
    height: 20px;
    font-size: 12px;
    padding: 5px;
`; 