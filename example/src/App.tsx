import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Shimmer from 'react-native-shimmer-kit';

const { width } = Dimensions.get('window');

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const ITEM_CARD_SIZE = (width - 32 - 24) / 3;

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.title}>React Native Shimmer Kit</Text>
      <View style={styles.section1}>
        <Shimmer
          width={120}
          height={120}
          borderRadius={60}
          marginRight={16}
          colors={['#BFDBFE', '#DBEAFE', '#DBEAFE', '#BFDBFE']}
        />
        <View style={styles.section2}>
          <Shimmer width={width * 0.3} height={26} borderRadius={6} />
          <Shimmer width={width * 0.2} height={26} borderRadius={6} />
          <Shimmer width={width * 0.5} height={26} borderRadius={6} />
        </View>
      </View>
      <Shimmer
        width={width - 32}
        height={180}
        borderRadius={6}
        marginBottom={24}
        colors={['#A7F3D0', '#D1FAE5', '#D1FAE5', '#A7F3D0']}
      />
      <Shimmer
        width={100}
        height={30}
        borderRadius={6}
        marginBottom={12}
        colors={['#FDE68A', '#FEF3C7', '#FEF3C7', '#FDE68A']}
      />
      <View style={styles.section3}>
        {DATA.map((_, idx) => (
          <Shimmer
            key={idx}
            width={ITEM_CARD_SIZE}
            height={ITEM_CARD_SIZE}
            borderRadius={6}
            duration={1000}
            colors={['#D1D5DB', '#E5E7EB', '#E5E7EB', '#D1D5DB']}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  section1: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  section2: {
    justifyContent: 'space-around',
  },
  section3: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 100,
    gap: 12,
  },
});
