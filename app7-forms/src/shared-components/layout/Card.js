const Card = ({ children }) => {
    return (
        <div class="card">
            <div class="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;