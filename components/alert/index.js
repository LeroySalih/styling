import motion from 'framer-motion'


const Alert = ({state, message, children}) => {
return  (<>
            <div className="display">{children}</div>
            <style jsx>{`
                .display {
                    border-left :   solid 5px var(--primary-${state}-colour);
                    background:     ${`var(--primary-${state}-background)`};
                    color:          ${`var(--primary-${state}-colour)`};
                    padding:        10px;
                    min-height:     2rem;
                    margin-bottom:  10px;
                    margin-right:   20px;
                    border-radius:  5px;
                    }
            `}</style>
        </>)
}

export default Alert;