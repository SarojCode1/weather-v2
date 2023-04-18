export const register = async (name, email, password) => {
    const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
        return data;
    } else {
        throw new Error(data.message);
        return
    }

};
