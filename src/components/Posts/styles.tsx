import styled from 'styled-components';

export const ContainerScroll = styled.ScrollView.attrs({
    vertical: true,
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    background-color: #fcfcfc;
    padding-bottom: 20px;
`;

export const Container = styled.View`
    flex: 1;
    height: 570px;
    padding-bottom: 20px;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

export const ContainerItemStory = styled.View`
    justify-content: center;
    align-items: center;
`; 

export const ContainerPhoto = styled.View`
    background-color: #FF8C00;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
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

export const PostPhoto = styled.Image.attrs({
    resizeMode: 'cover'
})`
    flex:1;
    margin: 20px;
    border-radius: 8px;
`; 
export const ContainerActions = styled.View`
    padding: 10px 20px;
`;

export const ContainerActionsIcons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

`;

export const GroupIcons = styled.View`
    flex-direction: row;
`;

export const Label = styled.Text`
    padding-top: 2px;
    font-size: 12px;
`;
