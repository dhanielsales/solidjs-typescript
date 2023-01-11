import { Box } from '../../../components/Box';

export function HomePage() {
  return (
    <section>
      <Box
        class="my-box"
        styling={{
          color: 'red',
          transition: 'all 0.2s ease-in-out',
        }}
        pseudos={{
          ':hover': {
            background: 'blue',
          },
        }}
      >
        Home
      </Box>
    </section>
  );
}
