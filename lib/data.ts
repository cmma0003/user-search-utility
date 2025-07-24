import { User } from "./definitions";

export async function fetchFilteredUsers(query: string) : Promise<User[]> {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!data.ok) {
            console.error(`Fetch failed with status code ${data.status}`);
        }

        const users : User[] = await data.json();

        const normalizedQuery = query.trim().toLowerCase();
        if (query.length === 0) return users;

        const filteredUsers = users.filter(user => {
            return user.email.trim().toLowerCase().includes(normalizedQuery) || user.name.trim().toLowerCase().includes(normalizedQuery)
                ? user : null });
        return filteredUsers;

    } catch (error) {
        console.error("Error fetching users: ", error);
        return [];
    }
}
