import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    useDisclosure,
    Box,
    Button,
} from "@chakra-ui/react"
import ChangeMode from "../ChangeTheme";
import Link from "../Link";
import {useRef} from "react";

const BreakingDrawer = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <Drawer onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton/>
                            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
                            <DrawerBody>
                                <ChangeMode/>
                                <Box mt="2">
                                    <Link href="/">Back to main</Link>
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Drawer>
        </>
    )
}

export default BreakingDrawer;
