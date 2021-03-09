import {Button, useColorMode} from "@chakra-ui/react"

const ChangeMode = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <header>
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </header>
    )
}

export default ChangeMode
