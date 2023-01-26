import { Pressable, Text } from 'react-native';
import classNames from 'classnames/bind';

export default function Card({ onPress, isTurnedOver, children }) {
  const cardStyles = classNames(
    isTurnedOver ? 'bg-purple-300' : 'bg-pink-300',
    'w-28 h-28 m-2 flex items-center justify-center rounded-xl border-2 border-sky-300'
  );
  return (
    <Pressable className={cardStyles} onPress={onPress}>
      {isTurnedOver ? (
        <Text className='p-1 text-8xl'>{children}</Text>
      ) : (
        <Text className='p-1 font-medium text-white text-8xl'>?</Text>
      )}
    </Pressable>
  );
}
