import React from 'react';

import { Container, ContainerHeader, GroupLabel, Label, ContainerScrollStory, ContainerItemStory, ContainerPhoto, Photo, Name } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import photo from '../../assets/images/photo.png';

const Stories = () => {

    return (
        <Container>
            <ContainerHeader>
                <Label>Stories</Label>
                <GroupLabel>
                    <Icon name='caret-right' size={20} />
                    <Label>Watch all</Label>
                </GroupLabel>
            </ContainerHeader>
            
            <ContainerScrollStory>
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={photo}/>
                    </ContainerPhoto>
                    <Name>Rodrigo</Name>
                </ContainerItemStory>
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={photo}/>
                    </ContainerPhoto>
                    <Name>Rodrigo</Name>
                </ContainerItemStory>
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={photo}/>
                    </ContainerPhoto>
                    <Name>Rodrigo</Name>
                </ContainerItemStory>
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={photo}/>
                    </ContainerPhoto>
                    <Name>Rodrigo</Name>
                </ContainerItemStory>
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={photo}/>
                    </ContainerPhoto>
                    <Name>Rodrigo</Name>
                </ContainerItemStory>
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={photo}/>
                    </ContainerPhoto>
                    <Name>Rodrigo</Name>
                </ContainerItemStory>

            </ContainerScrollStory>
        </Container>
    );
};

export default Stories;