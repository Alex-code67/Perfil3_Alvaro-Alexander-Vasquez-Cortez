import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { colors, spacing } from '../constants/theme';
import useCharacters from '../hooks/useCharacters';

const STATUS_COLORS = {
  Alive: colors.success,
  Dead: colors.danger,
  unknown: colors.textMuted,
};

export default function CharactersScreen() {
  const insets = useSafeAreaInsets();
  const { characters, loading, refreshing, loadingMore, error, loadMore, refresh } =
    useCharacters();

  if (loading && characters.length === 0) {
    return <Loader message="Cargando personajes..." />;
  }

  if (error && characters.length === 0) {
    return <ErrorMessage message={error} onRetry={refresh} />;
  }

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={[styles.list, { paddingBottom: insets.bottom + spacing.lg }]}
      data={characters}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Card
          title={item.name}
          image={item.image}
          description={item.description}
          tag={item.statusLabel}
          tagColor={STATUS_COLORS[item.status] ?? colors.textMuted}
        />
      )}
      ItemSeparatorComponent={Separator}
      refreshing={refreshing}
      onRefresh={refresh}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loadingMore ? (
          <ActivityIndicator style={styles.footer} color={colors.primary} />
        ) : null
      }
    />
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    padding: spacing.md,
  },
  separator: {
    height: spacing.md,
  },
  footer: {
    marginVertical: spacing.lg,
  },
});