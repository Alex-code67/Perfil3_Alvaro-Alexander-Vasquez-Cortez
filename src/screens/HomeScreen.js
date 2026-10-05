import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import { student } from '../constants/student';
import { colors, radius, spacing } from '../constants/theme';
import { ROUTES } from '../navigation/routes';

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + spacing.lg }]}
    >
      <Image source={require('../../assets/splash-icon.png')} style={styles.logo} />

      <Text style={styles.title}>{student.name}</Text>
      <Text style={styles.subtitle}>Evaluación práctica · Perfil 3</Text>

      <View style={styles.panel}>
        <InfoRow label="Nombre" value={student.name} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección" value={student.section} />
        <InfoRow label="Grupo" value={student.group} />
      </View>

      <PrimaryButton
        title="Ver personajes de Rick and Morty"
        onPress={() => navigation.navigate(ROUTES.CHARACTERS)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
  },
  panel: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    marginVertical: spacing.md,
  },
});