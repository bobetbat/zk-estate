import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
  footer?: boolean;
  header?: boolean;
};

export const Layout: React.FC<Props> = ({ children, footer, header }) => {
  return (
    <>
      {header && <Header />}
      <Stack sx={{ minHeight: '100vh', mt: '12vh', mb:'6vh', px: { xs: 2, sm: 10, md: 20, lg: 30 }, gap: 4 }}>
        {children}
      </Stack>
      {footer && <Footer />}
    </>
  );
}
