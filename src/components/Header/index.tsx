import React from 'react';

import { Container, Logo } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assets/images/logo.png';

const Header = () => {

    return (
        <Container>
            <Icon name="camera" size={26} />
            <Logo source={logo} />
            <Icon name="paper-plane" size={26} />
        </Container>
    );
};

export default Header;