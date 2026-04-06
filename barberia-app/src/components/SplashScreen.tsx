import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { theme } from '../theme';

interface Props {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: Props) {
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const barWidth = useRef(new Animated.Value(0)).current;
  const screenOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(logoScale, { toValue: 1, tension: 50, friction: 5, useNativeDriver: true }),
        Animated.timing(logoOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]),
      Animated.timing(titleOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(barWidth, { toValue: 200, duration: 1000, useNativeDriver: false }),
      Animated.timing(screenOpacity, { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start(() => onFinish());
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: screenOpacity }]}>
      <Animated.Image
        source={require('../../assets/icon.png')}
        style={[styles.logo, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}
      />

      <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
        THE BARBER
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, { opacity: titleOpacity }]}>
        Tu estilo, tu identidad
      </Animated.Text>

      <View style={styles.barContainer}>
        <Animated.View style={[styles.bar, { width: barWidth }]} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background },
  logo: { width: 140, height: 140, borderRadius: 32, marginBottom: 16 },
  title: { fontSize: 36, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 6 },
  subtitle: { color: theme.colors.gray, fontSize: 14, letterSpacing: 2, marginTop: 8, marginBottom: 40 },
  barContainer: { width: 200, height: 3, backgroundColor: theme.colors.lightGray, borderRadius: 2, overflow: 'hidden' },
  bar: { height: 3, backgroundColor: theme.colors.gold, borderRadius: 2 },
});
