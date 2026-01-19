import { HStack, Menu, Portal, Text } from '@chakra-ui/react';
import { LuChevronRight } from 'react-icons/lu';
import { useState } from 'react';

// Типы
interface SubMenuItem {
  title: string;
  items?: string[];
}

interface MenuData {
  title: string;
  items: SubMenuItem[];
}

interface NavItem {
  title: string;
  href?: string;
  menu?: SubMenuItem[];
}

interface AnimatedTextProps {
  children: React.ReactNode;
  href?: string;
  [key: string]: any;
}

interface SubMenuProps {
  title: string;
  items?: string[];
}

interface MainMenuProps {
  title: string;
  items: SubMenuItem[];
}

// Константы для меню
const MENU_ITEMS: Record<string, MenuData> = {
  collectives: {
    title: 'Коллективы и Объединения',
    items: [
      {
        title: 'Хореографические',
        items: [
          'Образцовый хореографический ансамбль «Луиза»',
          'Образцовая шоу-группа «Дефиле»',
          'Хореографическая студия «Ириски»',
          'Заслуженный коллектив народного творчества, образцовый хореографический ансамбль «Славяночка»',
          'Хореографическая студия «Арлекино»',
          'Хореографический коллектив «Забавушки»',
        ],
      },
      {
        title: 'Вокальные',
        items: [
          'Фольклорный ансамбль «Зёрнышки»',
          'Вокальный ансамбль «Веретёнце»',
          'Вокальный ансамбль «Звонцы»',
          'Народная вокальная студия «Ассорти»',
          'Народная вокальная студия',
          'Народный хор ветеранов «Вдохновение»',
        ],
      },
      {
        title: 'Инструментальные',
        items: [
          'Народный коллектив «Оркестр русских народных инструментов имени Юрия Владимировича Никулина»',
        ],
      },
      {
        title: 'Театральные',
        items: [
          'Народный коллектив самодеятельного художественного творчества молодежный театр «Молодая гвардия»',
          'Театральная студия «Имаго»',
        ],
      },
      {
        title: 'Клубы по интересам',
        items: [
          'Объединение турникменов «STREET WARRIORS»',
          'Медиацентр «Первые на связи!»',
          'Фотостудия «Фотосинтез»',
          'Волонтёры культуры',
        ],
      },
    ],
  },
  documents: {
    title: 'Документы',
    items: [
      {
        title: 'Общая информация об учреждении',
        items: ['История', 'План зрительного зала'],
      },
      {
        title: 'Бухгалтерия',
        items: [
          'Баланс',
          'Финансово-Хозяйственная деятельность',
          'Муниципальное задание',
          'Оказание платных услуг',
        ],
      },
      {
        title: 'Устав',
      },
      {
        title: 'Положение о клубных формированиях',
      },
      {
        title: 'Расписание клубных формирований',
      },
    ],
  },
  security: {
    title: 'Безопасности',
    items: [
      {
        title: 'Антитероро',
      },
      {
        title: 'Профилактика антисоциальных явлений',
      },
    ],
  },
  contact: {
    title: 'Контакты',
    items: [
      {
        title: 'Сотруднки',
      },
      {
        title: 'Контакты',
      },
    ],
  },
};

const NAV_ITEMS: NavItem[] = [
  { title: 'Главная', href: '/' },
  { title: MENU_ITEMS.collectives.title, menu: MENU_ITEMS.collectives.items },
  { title: MENU_ITEMS.documents.title, menu: MENU_ITEMS.documents.items },
  { title: MENU_ITEMS.security.title, menu: MENU_ITEMS.security.items },
  { title: MENU_ITEMS.contact.title, menu: MENU_ITEMS.contact.items },
];

// Компонент для пунктов меню с анимацией
const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  href,
  ...props
}) => (
  <Text
    as={href ? 'a' : 'span'}
    // href={href}
    px={5}
    fontSize="xl"
    cursor="pointer"
    transition="all 0.2s ease-in-out"
    _hover={{
      textDecoration: 'none',
      color: 'blue.600',
    }}
    {...props}
  >
    {children}
  </Text>
);

// Компонент для вложенного меню
const SubMenu: React.FC<SubMenuProps> = ({ title, items }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsSubmenuOpen(false);
    }, 150);
  };

  // Если нет подпунктов, отображаем как обычный пункт меню
  if (!items || items.length === 0) {
    return (
      <Menu.Item
        value={`item-${title}`}
        px={5}
        py={2}
        cursor="pointer"
        whiteSpace="normal"
        maxW="400px"
        _hover={{ bg: 'blue.50' }}
      >
        {title}
      </Menu.Item>
    );
  }

  // Если есть подпункты, отображаем как подменю
  return (
    <Menu.Root
      open={isSubmenuOpen}
      onOpenChange={e => setIsSubmenuOpen(e.open)}
      positioning={{ placement: 'right-start', gutter: 2 }}
    >
      <Menu.TriggerItem
        px={5}
        py={2}
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        _hover={{ bg: 'blue.50' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title} <LuChevronRight />
      </Menu.TriggerItem>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {items.map((item, index) => (
              <Menu.Item
                key={index}
                value={`item-${title}-${index}`}
                px={5}
                py={2}
                cursor="pointer"
                whiteSpace="normal"
                maxW="400px"
                _hover={{ bg: 'blue.50' }}
              >
                {item}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

// Компонент для главного меню
const MainMenu: React.FC<MainMenuProps> = ({ title, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 150);
  };

  const handleContentMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsMenuOpen(true);
  };

  const handleContentMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 150);
  };

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Menu.Root open={isMenuOpen} onOpenChange={e => setIsMenuOpen(e.open)}>
        <Menu.Trigger asChild>
          <Text
            px={5}
            fontSize="xl"
            cursor="pointer"
            transition="all 0.2s ease-in-out"
            _hover={{
              textDecoration: 'none',
              color: 'blue.600',
            }}
          >
            {title}
          </Text>
        </Menu.Trigger>
        {isMenuOpen && (
          <Portal>
            <Menu.Positioner>
              <Menu.Content
                onMouseEnter={handleContentMouseEnter}
                onMouseLeave={handleContentMouseLeave}
              >
                {items.map((submenu, index) => (
                  <SubMenu
                    key={index}
                    title={submenu.title}
                    items={submenu.items}
                  />
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        )}
      </Menu.Root>
    </div>
  );
};

const HeaderMenu: React.FC = () => {
  return (
    <HStack justify="space-around" p={5}>
      {NAV_ITEMS.map((item, index) => {
        if (item.menu) {
          return <MainMenu key={index} title={item.title} items={item.menu} />;
        }

        return (
          <AnimatedText key={index} href={item.href}>
            {item.title}
          </AnimatedText>
        );
      })}
    </HStack>
  );
};

export default HeaderMenu;
