import { useTheme } from '@mui/material/styles';
import styles from "../styles/Logo.module.css";

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <div className={styles.logo}>
      <img className={styles.image} src="../assets/logos/keymouseit.svg" />
    </div>
  );
};
