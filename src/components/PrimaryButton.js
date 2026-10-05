import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, radius, spacing } from '../constants/theme';

export default function PrimaryButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: colors.primaryPressed,
  },
  text: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
