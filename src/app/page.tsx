"use client"

import { 
  Box, Container, VStack, HStack, Text, Heading, 
  Button, SimpleGrid, Card, CardBody, CardHeader, 
  CardFooter, Icon, Stat, StatLabel, 
  StatHelpText,  Badge, Alert, 
 AlertTitle, AlertDescription,
  Progress, Spinner,
  Image, Flex, IconButton
} from "@chakra-ui/react"
import { FaMusic, FaTheaterMasks, FaPalette, FaUsers } from "react-icons/fa"
import { useState, useEffect } from "react"

export default function Home() {

  const [dbStatus, setDbStatus] = useState({ loading: true, connected: false, stats: null as any })
  const [loading, setLoading] = useState(true)

  const checkDatabase = async () => {
    try {
      const response = await fetch("/api/health")
      const data = await response.json()
      
      if (data.success) {
        setDbStatus({
          loading: false,
          connected: true,
          stats: data
        })
      } else {
        setDbStatus({
          loading: false,
          connected: false,
          stats: null
        })
      }
    } catch (error) {
      setDbStatus({
        loading: false,
        connected: false,
        stats: null
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkDatabase()
  }, [])

  const features = [
    {
      icon: FaMusic,
      title: "Концерты и выступления",
      description: "Регулярные музыкальные мероприятия и концерты",
      color: "culture.500"
    },
    {
      icon: FaTheaterMasks,
      title: "Театральные постановки",
      description: "Спектакли и театральные представления",
      color: "accent.500"
    },
    {
      icon: FaPalette,
      title: "Выставки и галереи",
      description: "Работы местных художников и фотографов",
      color: "brand.500"
    },
    {
      icon: FaUsers,
      title: "Творческие кружки",
      description: "Кружки и мастер-классы для всех возрастов",
      color: "green.500"
    }
  ]

  return (
    <Box minH="100vh">
      {/* Hero Section */}
      <Box 
  
        color="white"
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-10%"
          right="-10%"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="whiteAlpha.100"
          filter="blur(60px)"
        />
        
        <Container maxW="container.xl" position="relative">
          <VStack textAlign="center">
            <Badge 
              colorScheme="whiteAlpha" 
              px={4} 
              py={2} 
              borderRadius="full"
              fontSize="sm"
            >
              🎭 Официальный сайт
            </Badge>
            
            <Heading 
              as="h1" 
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              lineHeight="shorter"
              maxW="900px"
            >
              Центр культуры и досуга{" "}
              <Text as="span" color="yellow.200">"ПАРУС"</Text>
            </Heading>
            
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              maxW="600px"
              opacity={0.9}
            >
              Пространство для творчества, культуры и общения. 
              Организуем мероприятия, концерты и выставки для жителей города.
            </Text>
            
            <HStack  pt={4}>
              <Button 
                size="lg" 
                colorScheme="whiteAlpha"
                
              >
                Смотреть мероприятия
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                color="white"
                borderColor="whiteAlpha.500"
                _hover={{ bg: "whiteAlpha.100" }}
              >
                Контакты
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={16}>
        <VStack  align="stretch">
          
          {/* Database Status */}
          <Card.Root boxShadow="xl">
            <CardHeader pb={0}>
              <Heading size="lg">Статус системы</Heading>
            </CardHeader>
            <CardBody>
              {loading ? (
                <VStack  py={8}>
                  <Spinner size="xl" color="culture.500" />
                  <Text>Проверяем подключение к базе данных...</Text>
                </VStack>
              ) : dbStatus.connected ? (
                <Box>                   

                    fgfdfdfd
             
                </Box>
              ) : (<></>
              )}
            </CardBody>
            <CardFooter pt={0}>
              <Button
                onClick={checkDatabase}
              >
                Проверить подключение
              </Button>
            </CardFooter>
          </Card.Root>

          {/* Features */}
          <Box>
            <VStack  mb={10} textAlign="center">
              <Badge colorScheme="culture" px={3} py={1} borderRadius="full">
                Наши направления
              </Badge>
              <Heading size="xl">Что мы предлагаем</Heading>
              <Text fontSize="lg" color="blackAlpha.400" maxW="600px">
                Широкий спектр культурных мероприятий и творческих активностей для всех возрастов
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} >
              {features.map((feature, index) => (
                <Card.Root 
                  key={index} 
           
                  border="1px solid"
                  borderColor="gray.200"
                  _dark={{ borderColor: "gray.700" }}
                  transition="all 0.3s"
                  _hover={{ 
                    transform: "translateY(-8px)",
                    boxShadow: "2xl"
                  }}
                >
                  <Card.Body>
                    <VStack  align="start">
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg={`${feature.color}15`}
                        color={feature.color}
                      >
                        <Icon as={feature.icon} boxSize={6} />
                      </Box>
                      <Heading size="md">{feature.title}</Heading>
                      <Text color="blackAlpha.400">{feature.description}</Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </Box>

          {/* Tech Stack */}
          <Card.Root boxShadow="xl">
            <CardHeader>
              <Heading size="lg">Технологический стек проекта</Heading>
            </CardHeader>
            <CardBody>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} >
                {[
                  { name: "Next.js 14", desc: "React фреймворк", status: "active" },
                  { name: "TypeScript", desc: "Типизированный JS", status: "active" },
                  { name: "Chakra UI", desc: "Библиотека компонентов", status: "active" },
                  { name: "Prisma ORM", desc: "Работа с базой данных", status: dbStatus.connected ? "active" : "inactive" },
                  { name: "PostgreSQL", desc: "Основная база данных", status: dbStatus.connected ? "active" : "inactive" },
                  { name: "React Hook Form", desc: "Управление формами", status: "ready" },
                  { name: "NextAuth.js", desc: "Аутентификация", status: "planned" },
                  { name: "Cloudinary", desc: "Хостинг медиа", status: "planned" },
                ].map((tech, index) => (
                  <HStack 
                    key={index} 
                    p={4} 
                    borderRadius="lg"
                    bg="gray.50"
                    _dark={{ bg: "gray.800" }}
                  
                  >
                    <Box>
                      <Badge 
                        colorScheme={
                          tech.status === "active" ? "green" : 
                          tech.status === "ready" ? "yellow" : "gray"
                        }
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {tech.status === "active" ? "✅" : 
                         tech.status === "ready" ? "🔄" : "⏳"}
                      </Badge>
                    </Box>
                    <Box>
                      <Text fontWeight="bold">{tech.name}</Text>
                      <Text fontSize="sm" color="blackAlpha.400">{tech.desc}</Text>
                    </Box>
                  </HStack>
                ))}
              </SimpleGrid>
            </CardBody>
            <CardFooter>
              <Text ml={4} fontWeight="medium">75% завершено</Text>
            </CardFooter>
          </Card.Root>

          {/* Call to Action */}
          <Box 
            bg="culture.500"
            color="white"
            borderRadius="2xl"
            p={10}
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-50%"
              right="-50%"
              w="400px"
              h="400px"
              borderRadius="full"
              bg="whiteAlpha.100"
              filter="blur(80px)"
            />
            
            <VStack position="relative">
              <Heading size="xl">Готовы к разработке!</Heading>
              <Text fontSize="lg" maxW="600px" opacity={0.9}>
                Фундамент проекта заложен. База данных подключена, 
                UI библиотека установлена. Можно приступать к разработке функционала.
              </Text>
              
              <HStack pt={4}>
                <Button 
                  size="lg" 
                  colorScheme="whiteAlpha"
                  
                >
                  Создать админ-панель
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.500"
                  _hover={{ bg: "whiteAlpha.100" }}
                  
                >
                  Документация API
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Floating Theme Toggle */}
      <IconButton
        aria-label="Toggle theme"
        position="fixed"
        bottom="30px"
        right="30px"
        size="lg"
        borderRadius="full"
        colorScheme="culture"
        boxShadow="2xl"
        zIndex={1000}
      />
    </Box>
  )
}