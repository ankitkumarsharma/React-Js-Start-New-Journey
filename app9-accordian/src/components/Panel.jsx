const Panel = ({ title, isActive, onShow, children }) => {
    return (
        <>
            <section>
                <h4>{title}</h4>
                {
                    isActive ?
                        (children) :
                        <button onClick={onShow}>Show</button>
                }
            </section>
        </>
    )
}

export default Panel;