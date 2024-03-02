const user = {
    name: 'Ankit K Sharma',
    imgUrl: 'https://www.ankitkumarsharma.com/assets/img/ankit.JPG',
    imgSize: 90,
    city: 'Delhi / NCR',
    country: 'India'
}

function MyProfile() {
    return (
        <div>
            <h1>{user.name}</h1>
            <h3>{user.city}, {user.country}</h3>
            <img className="avatar" src={user.imgUrl} style={{
                width: user.imgSize,
                height: user.imgSize
            }}
            alt={'Profile - '+ user.name} />
        </div>
    );
}

export default MyProfile;