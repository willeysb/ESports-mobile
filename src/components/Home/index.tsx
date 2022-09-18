import React, { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'

import { Heading } from '../Heading';
import { GameCard, GameCardProps } from '../GameCard';

import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([])
    useEffect(() => {
        fetch('http://192.168.1.7:3333/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />
            <Heading
                title="Encontre seu duo"
                subtitle="Selecione o game que deseja jogar..."
            />
            <FlatList
                data={games}
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
        </SafeAreaView >
    );
}