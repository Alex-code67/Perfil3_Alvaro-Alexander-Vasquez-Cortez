import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '../constants/theme';

// Tarjeta reutilizable: imagen, título, etiqueta opcional y descripción.
export default function Card({ title, image, description, tag, tagColor = colors.primary }) {
  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      ) : null}

      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {tag ? (
            <View style={[styles.tag, { backgroundColor: tagColor }]}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ) : null}
        </View>

        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 190,
    backgroundColor: colors.background,
  },
  body: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
  tag: {
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.xs,
  },
  tagText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
});
