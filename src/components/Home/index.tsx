import React from 'react';
import { View, Image, FlatList } from 'react-native';


import logoImg from '../../assets/logo-nlw-esports.png'

import { Heading } from '../Heading';
import { GameCard } from '../GameCard';

import { GAMES } from '../../utils/games'

import { styles } from './styles';
import { Inter_500Medium } from '@expo-google-fonts/inter';

export function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />
            <Heading
                title="Encontre seu duo"
                subtitle="Selecione o game que deseja jogar..."
            />
            <FlatList
                data={GAMES}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <GameCard
                        data={item}
                    />
                )}
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View >
    );
}