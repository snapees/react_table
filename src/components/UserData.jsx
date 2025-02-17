// eslint-disable-next-line react/prop-types
const UserData = ({users}) => {
    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                users.map((curUser) => {
                    const {id, name, email} = curUser;
                    const {street, city, zipcode} = curUser.address;

                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData;