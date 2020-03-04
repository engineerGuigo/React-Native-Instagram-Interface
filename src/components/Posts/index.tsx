import React from 'react';

import { Container, ContainerItemStory, ContainerHeader, ContainerPhoto, Photo, Name } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Posts = () => {

    return (
        <Container>
            <ContainerHeader>
                <ContainerItemStory>
                        <ContainerPhoto>
                            <Photo />
                        </ContainerPhoto>
                        <Name>Gabigol</Name>
                    </ContainerItemStory>
                    <Icon name='ellipsis-h' size={14} color='#333'/>
            </ContainerHeader>
        </Container>    
    );
};

export default Posts;