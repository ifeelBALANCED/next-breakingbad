import {breakingURL} from "../../../common/config"
import BreakingDrawer from "../../../components/Drawer";
import {
    Flex,
    Box,
    Text,
    Image
} from "@chakra-ui/react"

export const getServerSideProps = async ({query}) => {
    const {id} = query
    const res = await fetch(`${breakingURL}/${id}`)
    const data = await res.json()
    return {
        props: {data}
    }
}

const Category = ({data}) => {
    const {
        char_id,
        birthday,
        occupation,
        img, status,
        nickname,
        portrayed,
        category,
        name
    } = data[0]

    return (
        <Box mt="2">
            <Flex align="center" justifyContent="center">
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src={img} alt={`img/${char_id}`}/>
                    <Box p="6">
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h1"
                            lineHeight="tight"
                            isTruncated
                        >
                            Name: {name}
                        </Box>
                        <Box
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            Alias: {nickname}
                        </Box>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            <Text fontSize="xs">{occupation}</Text>
                            <Text fontSize="xs">Status: {status}</Text>
                        </Box>
                        <Box>
                            <Box as="span" color="gray.600" fontSize="sm">
                                {portrayed}
                            </Box>
                        </Box>
                        <Flex flexDirection="column" flexWrap="wrap" justifyContent="space-between">
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                <Text fontSize="xs">Category: {category}</Text>
                                <Text fontSize="xs">Birthday: {birthday}</Text>
                            </Box>
                            <Box mt="2">
                                <BreakingDrawer/>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Category;
