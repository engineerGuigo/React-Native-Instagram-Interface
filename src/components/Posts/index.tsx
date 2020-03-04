import React, { useState } from 'react';

import { Container, 
    ContainerItemStory, 
    ContainerHeader, 
    ContainerPhoto, 
    Photo, 
    Name, 
    PostPhoto,
    ContainerActions,
    ContainerActionsIcons,
    GroupIcons,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import posts from './posts.json';

const Posts = () => {
    const [iconsConfigure] = useState({
        color: '#333',
        size: 16
    })

    return (
        posts && posts.map((post, index) => (
            <Container key={index}>
                <ContainerHeader>
                    <ContainerItemStory>
                            <ContainerPhoto>
                                <Photo source={{ uri: post.postPhoto }} />
                            </ContainerPhoto>
                            <Name>{post.profile.name}</Name>
                        </ContainerItemStory>
                        <Icon name='ellipsis-h' size={14} color='#8888'/>
                </ContainerHeader>
                <PostPhoto source={{ uri: post.postPhoto }} />
                <ContainerActions>
                    <ContainerActionsIcons>
                        <GroupIcons>
                            <Icon name='heart' {...iconsConfigure}/>
                        </GroupIcons>
                    </ContainerActionsIcons>
                </ContainerActions>
            </Container> 
        ))
    );
};

export default Posts;