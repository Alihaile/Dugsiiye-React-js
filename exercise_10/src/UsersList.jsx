const UsersList = ({ users }) => {
    return (
        <table style={{ width: '100%', borderCollapse: "collapse" }} border={1}>
            <thead>
                <tr style={{ backgroundColor: "#dbe8e8" }}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td style={{ padding: "5px 10px" }}>{user.id}</td>
                            <td style={{ padding: "5px 10px" }}>{user.name}</td>
                            <td style={{ padding: "5px 10px" }}>{user.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default UsersList;