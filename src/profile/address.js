import {Box, Button, Card, Container, Flex, Heading, SimpleGrid, Text, Input} from "@chakra-ui/react";
import { MediaRenderer, Web3Button, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React from "react";

export default function ProfilePage(){
    const myAddress=useAddress();
    const {contract:wubiContract}=useContract("0xde16ea1d873e3dd149c488a4c14b8116244e9b51");
    const {data:myOwnedNFTs, isLoading:loadingOwnedNFTs}=useOwnedNFTs(wubiContract,myAddress);
    return(
        <Container maxW={"1200)x"} mt={10}>
            <Heading mt={10}>Profile</Heading>
            <Box>
                <Text fontWeight={"bold"}>My WUBI NFTs :</Text>
                <SimpleGrid columns={6} spacing={5} my={5}>
                    {!loadingOwnedNFTs && myOwnedNFTs?.map((wubiNFT)=>(
                        <Card overflow={"hidden"} p={2}>
                            <Flex justifyContent={"space-between"} alignItems={"center"} direction={"row"}>
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