import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Board  from './src/components/Board.js';

export default function App() {
  return (
    <>
      <Board/>
      <StatusBar style='light' />
    </>
  );
}
