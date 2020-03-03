import React from 'react';

import { Container, ContainerHeader, GroupLabel, Label, } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

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
        </Container>
    );
};

export default Stories;