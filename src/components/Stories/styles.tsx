import styled from 'styled-components';

export const Container = styled.View`
    background-color: #fff;
    padding: 10px;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;

`;

export const GroupLabel = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text`
    font-size: 14px;
    padding: 5px;
`;

export const ContainerScrollStory = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    flex-direction: row;
`; 

export const ContainerItemStory = styled.View`
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: flex-start;
    margin-top: 10px;
`; 

export const ContainerPhoto = styled.View`
    background-color: #FF8C00;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    border-width: 1px;
    border-color: #fff;
`; 

export const Photo = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 56px;
    height: 56px;
    border-radius: 28px;
    border: 2.5px solid #fff;
`; 

export const Name = styled.Text`
    height: 20px;
    font-size: 12px;
    padding: 5px;
`; 