import React from "react";
import { Box, Heading, Text, Image, Button, Stack, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaBeer } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="blue.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            HB Telavi <FaBeer />
          </Heading>
        </Flex>
        <Stack direction="row" spacing={4}>
          <Button colorScheme="yellow" variant="ghost">
            Home
          </Button>
          <Button colorScheme="yellow" variant="ghost">
            Menu
          </Button>
          <Button colorScheme="yellow" variant="ghost">
            About
          </Button>
          <Button colorScheme="yellow" variant="ghost">
            Contact
          </Button>
        </Stack>
      </Flex>

      {/* Hero */}
      <Box bg="yellow.100" py={20}>
        <Flex maxW="1200px" mx="auto" direction={["column", "row"]} align="center">
          <Box flex="1" pr={[0, 10]}>
            <Heading as="h2" size="2xl" mb={4}>
              Welcome to HB Telavi
            </Heading>
            <Text fontSize="xl" mb={6}>
              Discover the perfect blend of craft beer and global cuisine in a cozy atmosphere.
            </Text>
            <Button colorScheme="blue" size="lg">
              View Menu
            </Button>
          </Box>
          <Box flex="1">
            <Image src="https://images.unsplash.com/photo-1503011510-c0e00592713b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBjb3p5fGVufDB8fHx8MTcxMTk5NDQ3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Restaurant Interior" borderRadius="md" />
          </Box>
        </Flex>
      </Box>

      {/* Features */}
      <Box maxW="1200px" mx="auto" my={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Why Choose HB Telavi?
        </Heading>
        <Flex direction={["column", "row"]} justify="space-between">
          <Box flex="1" p={5} bg="blue.50" borderRadius="md" mb={[5, 0]}>
            <Heading as="h3" size="lg" mb={4}>
              Craft Beer Selection
            </Heading>
            <Text fontSize="lg">Enjoy a wide variety of carefully curated craft beers from local and international breweries.</Text>
          </Box>
          <Box flex="1" p={5} bg="yellow.50" borderRadius="md" mb={[5, 0]} mx={[0, 5]}>
            <Heading as="h3" size="lg" mb={4}>
              Global Cuisine
            </Heading>
            <Text fontSize="lg">Savor delicious dishes from various cultures, prepared with fresh ingredients.</Text>
          </Box>
          <Box flex="1" p={5} bg="blue.50" borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>
              Cozy Atmosphere
            </Heading>
            <Text fontSize="lg">Relax in our warm and inviting atmosphere, perfect for gatherings with friends and family.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.500" color="white" py={10}>
        <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
          <Box>
            <Heading as="h4" size="md" mb={2}>
              HB Telavi
            </Heading>
            <Text>123 Main Street, City, Country</Text>
            <Text>Phone: 123-456-7890</Text>
            <Text>Email: info@hbtelavi.com</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md" mb={2}>
              Follow Us
            </Heading>
            <Flex>
              <IconButton icon={<FaFacebook />} variant="ghost" colorScheme="white" mr={2} />
              <IconButton icon={<FaInstagram />} variant="ghost" colorScheme="white" mr={2} />
              <IconButton icon={<FaTwitter />} variant="ghost" colorScheme="white" />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
