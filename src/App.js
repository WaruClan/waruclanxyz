//import "./styles/Home.css";
import {Box, Card, Container, Flex, Heading, Image, SimpleGrid, Spinner,Text } from "@chakra-ui/react";
import {ConnectWallet, MediaRenderer, useContract, useAddress, useOwnedNFTs } from "@thirdweb-dev/react";
import waruClan from "./components/waru.png";

export default function Home() {
  const myAddress=useAddress();
  const {contract:wubiContract}=useContract("0xde16ea1d873e3dd149c488a4c14b8116244e9b51");
  const {data:myOwnedNFTs, isLoading:loadingOwnedNFTs}=useOwnedNFTs(wubiContract,myAddress);
  return (
    <Container maxW={"1200px"} py={5}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontWeight={"bold"}>Waru Clan</Text>
        <ConnectWallet/>
      </Flex>
      <br/>
      <Flex>
        <Image src={waruClan} borderRadius={15}/>
      </Flex>
      {loadingOwnedNFTs ? (
        <Flex h={"90vh"} direction={"column"} justifyContent={"center"} align={"center"}>
          <Spinner/>
        </Flex>
      ) : (
        <Container maxW={"1200)x"} mt={10}>
        <Box>
            <Text fontWeight={"bold"}>My NFTs :</Text>
            <SimpleGrid columns={4} spacing={5} my={5}>
                {myOwnedNFTs?.map((wubiNFT)=>(
                    <Card overflow={"hidden"} p={2}>
                        <Flex justifyContent={"space-between"} alignItems={"center"}>
                            <Text ml={4} fontWeight={"bold"}>{wubiNFT.metadata.name}</Text>
                        </Flex>
                        <MediaRenderer src={wubiNFT.metadata.image}/>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    </Container>
      )
      }
    </Container>
  );
}