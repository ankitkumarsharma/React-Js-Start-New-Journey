const Heading = ({children, level})=>{
    switch(level) {
        case 1:
            return <h1 className="text-3xl font-bold">{children}</h1>
        case 2:
            return <h2 className="text-2xl font-semibold">{children}</h2>
        case 3:
            return <h3 className="text-xl font-semibold">{children}</h3>
        case 4:
            return <h4 className="text-lg font-medium">{children}</h4>
        case 5:
            return <h5 className="text-base font-medium">{children}</h5>
        case 6:
            return <h6 className="text-base font-normal">{children}</h6>
        default:
            throw Error('Unknown level: ');
    }
}

export default Heading;