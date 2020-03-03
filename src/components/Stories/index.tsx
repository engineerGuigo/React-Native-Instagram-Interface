import React from 'react';

import { Container, ContainerHeader, GroupLabel, Label, } from './styles';

const Stories = () => {

    return (
        <Container>
            <ContainerHeader>
                <Label>Stories</Label>
                <GroupLabel>
                    <Label>Watch all</Label>
                </GroupLabel>
            </ContainerHeader>
        </Container>
    );
};

export default Stories;