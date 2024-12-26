# Netflix Clone

This is a Netflix clone built using **React.js**. The project showcases movie data fetched from the **TMDb (The Movie Database)** API. For user authentication and security, **Firebase Authentication** is used. Additionally, **React Toastify** is implemented for elegant popup notifications.

---

## Features

- **Browse Movies**: Displays movies fetched from TMDb API.
- **User Authentication**: Login and Signup functionality using Firebase.
- **Secure Authentication**: Firebase handles login, password security, and user management.
- **Popup Notifications**: React Toastify provides visually appealing notifications for user actions.
- **Responsive Design**: Optimized for different screen sizes.

---

## Tech Stack

- **React.js**: Frontend library for building the user interface.
- **Firebase**: Authentication, database, and hosting.
- **TMDb API**: Movie dataset for fetching movies and TV shows.
- **React Toastify**: Notifications for a smooth user experience.
- **CSS/Styled Components**: For styling the application.

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
2. Navigate to the project directory:
    ```bash
    cd netflix-clone
3. Install dependencies:
   ```bash
    npm install
4. Create a .env file in the root directory and add your Firebase and TMDb API credentials:
   ```bash
    REACT_APP_API_KEY=your_tmdb_api_key
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
5. Start the development server:
   ```bash
    npm start

---

## Setup TMDb API

1. Go to TMDb and create an account if you don’t already have one.
2. Generate an API key from your TMDb account settings.
3. Add the API key to your .env file as shown above.

---

## Setup Firebase

1. Go to Firebase Console and create a new project.
2. Enable Authentication in the Firebase console.
3. Add your Firebase credentials to the .env file.

---

## Libraries Used

- **React.js**
- **Firebase**
- **TMDb API**
- **React Toastify**

---

## Future Improvements

1. Add a search functionality to find movies by name.
2. Add a "Watchlist" feature for saving favorite movies.
3. Improve UI/UX for a better user experience.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
    ```bash
    git checkout -b feature-name
3. Commit your changes:
    ```bash
    git commit -m "Add your message here"
4. Push to the branch:
   ```bash
    git push origin feature-name
5. Open a pull request.

---

## Acknowledgements

- **Thanks to TMDb for providing the movie dataset.**
- **Thanks to Firebase for authentication and backend support.**

