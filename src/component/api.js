export const getUsers = async () => {
    const response = await fetch('/User');
    const data = await response.json();
    return data;
}
import { getUsers } from './api';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            setUsers(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
