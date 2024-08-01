# Password Authentication Web Application by Worachat W., Ph.D.

This project implements a simple web-based password authentication system using HTML, CSS, and JavaScript. The system includes a login form where users can enter their credentials, and it verifies the credentials against a simulated database.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **User Login**: A form to enter username and password.
- **Client-Side Hashing (for demo purposes)**: Uses MD5 hashing for password verification.
- **Responsive Design**: Styled with CSS for a simple, clean look.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/password-authentication-web.git
   cd password-authentication-web
   ```

2. **Open the Project**:

   You can open the `index.html` file in any web browser to use the application.

## Usage

1. **Open the Web Page**:

   Open `index.html` in your web browser.

2. **Enter Credentials**:

   - **Username:** You can use the example usernames provided in the simulated database (e.g., `clcoding`, `pythonclcoding`).
   - **Password:** Corresponding passwords for the usernames (`976729`, `2502`).

3. **Login Verification**:

   The application will display a "Verified" message for correct credentials or indicate an error for incorrect credentials.

## File Structure

```
password-authentication-web/
├── index.html        # The main HTML file containing the login form
├── styles.css        # CSS file for styling the web page
├── scripts.js        # JavaScript file for handling form submission and verification
└── README.md         # Project documentation
```

## Security Considerations

- **Client-Side Hashing**: This demo uses client-side MD5 hashing, which is **not secure**. For real-world applications, hashing and verification should be done server-side using strong hashing algorithms like bcrypt or Argon2, with a unique salt for each user.

- **Sensitive Operations**: Always perform sensitive operations on the server side and transmit data over HTTPS to protect against man-in-the-middle attacks.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by tutorials from [Worachat W.](https://github.com/worachat-dev)
