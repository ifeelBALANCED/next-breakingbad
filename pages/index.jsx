import Link from "../components/Link";
import {
    Table,
    Tbody,
    Tr,
    Th,
    Flex,
    TableCaption, Image, Box
} from "@chakra-ui/react"
import {breakingURL} from "../common/config";
import THead from "../components/THead";
import BreakingDrawer from "../components/Drawer";


export const getServerSideProps = async () => {
    const res = await fetch(breakingURL)
    const data = await res.json()
    return {
        props: {data}
    }
}


const Home = ({data}) => {
    return (
        <>
            <Flex justifyContent="center" align="center">
                <Box mt="2">
                    <BreakingDrawer/>
                </Box>
            </Flex>
            {data.map(({occupation, birthday, char_id, name, img}) => (
                <Flex justifyContent="center" align="center" m="0 auto">
                    <Table variant="striped" colorScheme="blue" maxW={`900px`} border="1px solid #e2e8f0">
                        <THead/>
                        <TableCaption placement={`top`}>{occupation[0]}</TableCaption>
                        <Tbody>
                            <Tr>
                                <Th>
                                    <Image
                                        alt={`img/${char_id}`}
                                        objectFit="cover"
                                        align="center"
                                        boxSize="300px"
                                        src={img}
                                    />
                                </Th>
                                <Th key={birthday}>
                                    <Link href={`characters/${char_id}`}>{name}</Link>
                                </Th>
                            </Tr>
                        </Tbody>
                    </Table>
                </Flex>
            ))}
        </>
    )
}


export default Home
