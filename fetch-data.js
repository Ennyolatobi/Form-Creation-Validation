async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        //clear the loading message
        dataContainer.innerHTML = '';

        //create a list element to hold user names
        const userList = document.createElement('ul');

        //loop through users
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem)
            
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data';
    }
    
}

documentdocument.addEventListener('DOMContentLoaded', fetchUserData);
