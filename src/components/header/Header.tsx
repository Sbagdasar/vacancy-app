import {Burger, Container, createStyles, Group, Header, rem} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import logo from '../../assets/logo.svg'

const useStyles = createStyles((theme) => ({
  header:{
    borderBottom:'none'

  },
  inner: {
    height: rem(56),
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    gap:'30%',
    backgroundColor:'#fff',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    '&:hover': {
      color:'#5E96FC'
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string;}[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} mb={120} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <img src={logo}/>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
      </Container>
    </Header>
  );
}