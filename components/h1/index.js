import {motion } from 'framer-motion'


const h1 = ({children}) => {
return <motion.h1
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 1}}
        >{children}</motion.h1>
}

export default h1;