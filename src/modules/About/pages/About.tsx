import { Box } from '../../../components/Box';

export function AboutPage() {
  return (
    <section>
      <Box
        styling={{
          color: 'red',
        }}
        pseudos={{
          ':hover': {
            background: 'blue',
          },
        }}
      >
        About
      </Box>
    </section>
  );
}
