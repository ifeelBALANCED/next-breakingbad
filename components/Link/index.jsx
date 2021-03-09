import {Link as ChakraLink} from '@chakra-ui/react';


const Link = ({children, href, ...props}) => {
    const formattedHref = href.replace(/\s/g, '-');

    return (
        <ChakraLink href={formattedHref} {...props}>
            {children}
        </ChakraLink>
    );
};

export default Link;
