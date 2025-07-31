# My Netflix Clone

This is a web app that mimics Netflix! You can explore movies and TV shows, watch their trailers, and log in securely with your Google account.

## What It Does

* **Easy Login:** Sign in with your Google account (or email/password) thanks to **Firebase**.
* **Browse Movies & Shows:** See lots of movie and TV show posters.
* **Watch Trailers:** Click on any poster to watch its trailer right away.
* **Looks Good Anywhere:** Works well on phones, tablets, and computers.

## How It's Built

* **Frontend:** Made with **React.js** for a smooth user experience.
* **Fast Development:** Uses **Vite** to make building and running the app super fast.
* **User Accounts:** **Google Firebase** handles all the login and user management securely.
* **Movie Data:** Gets movie and show information (like titles and trailers) from an external API, likely **The Movie Database (TMDB) API**.

## Get Started (For Developers)

Want to run this project on your own computer?

### What You Need

* **Node.js:** A program that lets you run JavaScript outside of a web browser.
* **npm** or **Yarn:** Tools to install project parts.

### Setup Steps

1.  **Get the Code:** Open your terminal and run:
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```
2.  **Install Stuff:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Link to Firebase

This app uses Google Firebase for user accounts. You need to set up your own Firebase project:

1.  **Create a Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/), click "Add project," and follow the steps.
2.  **Get Your Firebase Keys:** After creating your project, click the web icon (`</>`) to add a web app. Firebase will give you a code snippet with keys like `apiKey`, `authDomain`, etc. Copy all of these.
3.  **Create a `.env` file:** In the main folder of your project, create a new file named `.env`. Paste your Firebase keys into this file like this (replace `YOUR_...` with your actual keys):
    ```
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    VITE_FIREBASE_APP_ID="YOUR_APP_ID"
    VITE_TMDB_API_KEY="YOUR_TMDB_API_KEY" # Don't forget your TMDB API key here!
    ```
    **Important:** Always add `.env` to your `.gitignore` file. This stops your keys from being shared publicly on GitHub.
4.  **Turn On Login Methods:** In your Firebase Console, go to **Authentication** > **Sign-in method**. Enable **Google** as a sign-in option.

## How to Use It

1.  **Start the App:** In your terminal, run:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will open the app in your web browser, usually at `http://localhost:5173`.
2.  **Log In:** You'll see a login page. Use your Google account (or other methods you've enabled) to sign in.
3.  **Enjoy!** Once logged in, browse around and click any poster to watch its trailer.

## Want to Help?

Contributions are welcome!

1.  Fork this project.
2.  Create a new branch for your changes (`git checkout -b my-new-feature`).
3.  Make your updates.
4.  Commit them (`git commit -m 'Added cool new feature'`).
5.  Push your changes (`git push origin my-new-feature`).
6.  Open a Pull Request.

## livProject Linke

 [https://github.com/your-username/your-repo-name](https://github.com/your-username/your-repo-name)