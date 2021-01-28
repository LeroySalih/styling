import {motion} from 'framer-motion';
import styled from 'styled-components';

const Sidebar = styled(motion.div)`
    background-color: var(--test-background);
    min-height: 100vh;
`

const Comp = () => {
    return <>
            <Sidebar 
                initial={{opacity:0, minHeight: "100vh"}}
                animate={{opacity:1, background: "var(--test-background)"}}
                className="sidebar">
                title
            </Sidebar>
        </>
}


export default Comp;