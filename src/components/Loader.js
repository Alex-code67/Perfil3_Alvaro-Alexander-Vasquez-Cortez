import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../constants/theme';

export default function Loader({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.textMuted,
    fontSize: 15,
  },
});
