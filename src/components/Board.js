import { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';
import Card from '../components/Card.js';
import { emojis } from '../helpers/EmojiList';
import { shuffle } from '../helpers/Shuffler.js';

export default function Board() {
  const [board, setBoard] = useState(() => shuffle([...emojis, ...emojis]));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [clicks, setClicks] = useState(0);

  const handleTapCards = (id) => {
    if (selectedCards.length >= 2 || selectedCards.includes(id)) return;
    setSelectedCards([...selectedCards, id]);
    setClicks(clicks + 1);
  };

  const resetGame = () => {
    setClicks(0);
    setSelectedCards([]);
    setMatchedCards([]);
    setBoard(shuffle([...emojis, ...emojis]));
  };

  const playerWin = () => matchedCards.length === board.length;

  useEffect(() => {
    if (selectedCards.length < 2) return;

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  return (
    <LinearGradient
      colors={['#F56EB3', '#CB1C8D', '#7F167F', '#7F167F', '#460C68']}
      className='flex items-center justify-center h-screen'
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text className='text-4xl font-bold text-white text-decoration-solid'>
        {playerWin() ? 'Congratulations! 🎉' : 'Memory 🧠 💭'}
      </Text>
      <Text className='text-2xl font-bold text-white text-decoration-solid'>
        Clicks: {clicks}
      </Text>
      <View className='flex flex-row flex-wrap justify-center pt-10 pb-8'>
        {board?.map(({ emoji }, id) => {
          const isTurnedOver =
            selectedCards.includes(id) || matchedCards.includes(id);
          return (
            <Card
              key={id}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCards(id)}
            >
              {emoji}
            </Card>
          );
        })}
      </View>
      {playerWin() && (
        <Pressable
          onPress={resetGame}
          className='p-4 rounded-lg bg-fuchsia-300'
        >
          <Text className='text-2xl font-bold text-white'>Reset game 🎰</Text>
        </Pressable>
      )}
    </LinearGradient>
  );
}