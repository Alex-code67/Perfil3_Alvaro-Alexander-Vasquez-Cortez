import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../constants/theme';

// Fila "etiqueta: valor" para mostrar un dato del estudiante.
export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.sm + 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  label: {
    color: colors.textMuted,
    fontSize: 14,
  },
  value: {
    flexShrink: 1,
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
  },
});
