import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  history: {
    flexGrow: 1,
    padding: 32,
  },
  swipeableRemove: {
    width: "100%",
    height: 90,
    borderRadius: 6,
    marginLeft: 30,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    alignItems: 'flex-start',
    justifyContent:'center',
  },
  swipeableContainer:{
    width: '100%',
    height: 90,
    marginBottom: 12,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderRadius:6,
  },
});