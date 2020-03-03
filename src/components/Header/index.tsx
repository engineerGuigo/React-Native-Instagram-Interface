import React from 'react';

import { Container } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {

    return (
        <Container>
            <Icon name="camera" size={26} />
            <Icon name="paper-plane" size={26} />
        </Container>
    );
};

export default Header;