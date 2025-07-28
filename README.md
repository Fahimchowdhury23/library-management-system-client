# 📚 LibraFlow

An interactive Library Management System designed for schools to efficiently manage book collections, track borrow/return activity, and offer a central place where everyone can enjoy reading — categorized by genres.

## 🔗 Live Demo

🌐 [Live Site](https://library-management-system-23.web.app) _Hold Ctrl (or Command on Mac) and click the link to open it in a new tab._

---

## 🎯 Purpose

**LibraFlow** is built to:

- 📚 Add and manage a categorized collection of books
- 🔄 Track borrowed and returned books
- 🧑‍🏫 Offer a seamless experience for school libraries to manage book circulation
- 📖 Provide one central platform for everyone to enjoy reading, sorted by genres

---

## 🚀 Key Features

- 📘 **Book Management** – Add, edit, and delete books in the collection
- 🗂️ **Categorization** – Organize books by genre for easy discovery
- 🔄 **Borrow/Return System** – Track book lending and returns in real-time
- 🔐 **Authentication** – Secure login/signUp using Firebase
- 🔐 **Protected Routes** – Authenticated access for borrowing books and managing collections
- 📱 **Fully Responsive** – Optimized for all devices: mobile, tablet, and desktop
- 🔥 **Toasts & Alerts** – Friendly notifications and sweet alerts for actions
- 📆 **Date Pickers** – Easily select return dates
- ⏱️ **Real-Time Updates** – Library activity updates without refresh

---

## 🛠️ Tech Stack

| Tech                    | Usage                       |
| ----------------------- | --------------------------- |
| ⚛️ React                | Frontend UI                 |
| 🔥 Firebase             | Authentication              |
| 🌬️ Tailwind CSS         | Styling                     |
| 🔄 React Router         | Routing                     |
| 🛠️ Vite                 | Fast dev environment        |
| 🍞 React Hot Toast      | Notifications               |
| 💡 SweetAlert2          | Modals & Alerts             |
| 🌀 Swiper               | Featured content carousels  |
| 🧸 Lottie               | Engaging animations         |
| 📆 React Date-picker    | Return date selection       |
| ⏱️ React CountUp        | Animated statistics         |
| 📅 Date-fns             | Date formatting & utilities |
| 📦 Axios                | API calls                   |
| 🌟 React Rating         | Book rating display         |
| 🎨 React Icons          | UI Icons                    |
| 🎬 Motion               | Animations & transitions    |
| 🛠️ Tailwind Vite Plugin | Tailwind with Vite support  |

---

## 🚧 Error Handling Routes

Our application includes dedicated routes to handle errors gracefully:

- 🚫 404 - Page Not Found:  
  This route catches all undefined URLs and displays a user-friendly "Page Not Found" message, helping users navigate back to valid pages.

---

## 🧩 NPM Packages Used

| Package             | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| `@tailwindcss/vite` | Tailwind CSS integration with Vite                     |
| `axios`             | API requests for client-server communication           |
| `date-fns`          | Utility functions for date formatting and manipulation |
| `firebase`          | Authentication                                         |
| `lottie-react`      | Animated illustrations for better UI experience        |
| `motion`            | Smooth animations and transitions                      |
| `react`             | Core React library                                     |
| `react-countup`     | Animated counters for dashboard stats                  |
| `react-datepicker`  | User-friendly date selection components                |
| `react-dom`         | Renders React components into the DOM                  |
| `react-hot-toast`   | Toast notifications for actions                        |
| `react-icons`       | Icon set for UI elements                               |
| `react-rating`      | Component for displaying book ratings                  |
| `react-router`      | Client-side routing and navigation                     |
| `sweetalert2`       | Beautiful alert pop-ups                                |
| `swiper`            | Responsive carousel for featured books                 |
| `tailwindcss`       | Utility-first CSS framework for responsive design      |

Refer to `package.json` for the entire list of dependencies.

---

## Installation

To set up the project locally, follow these steps:

1. **Clone the client (frontend) repositories :**

   ```bash
   git clone https://github.com/Fahimchowdhury23/library-management-system-client.git
   ```

2. **Clone the server (backend) repository :**

   ```bash
   git clone https://github.com/Fahimchowdhury23/library-management-system-server.git
   ```

3. **Navigate to the client directory :**

   ```bash
   cd library-management-system-client
   ```

4. **Install client dependencies :**

   ```bash
   npm install
   ```

5. **Run the development server :**

   ```bash
   npm run dev
   ```

6. **Now Navigate to the server directory**

   ```bash
   cd ../library-management-system-server
   ```

7. **Install server dependencies :**

   ```bash
   npm install
   ```

8. **Run the development server (Choose one) :**
   Run normally :

   ```bash
   node index.js
   ```

   Or,

   If you have nodemon installed globally just run : (it will auto-restart on changes)

   ```bash
   nodemon index.js
   ```

---

### Notes

- Make sure you have [Node.js](https://nodejs.org/) installed.
- If you don’t have nodemon installed globally, you can run it with:

  ```bash
  npx nodemon index.js
  ```

- Run frontend and backend servers simultaneously in separate terminal windows or tabs.

## Usage

Once the project is set up, you can:

1. **Start the Development Server :**
   Run the following command and access the project at `http://localhost:5173/`

   ```bash
   npm run dev
   ```

2. **Build for Production :**
   Create a production-ready build using:

   ```bash
   npm run build
   ```

3. **Preview the Production Build :**
   After building, preview the app with:

   ```bash
   npm run preview
   ```

4. **Deploy :**
   Follow Firebase deployment commands to host your app:
   ```bash
   firebase deploy
   ```

## 🧁 Contribute

Contributions are welcome!  
If you’d like to suggest new features, improve the UI, or fix bugs, feel free to fork the repo and open a pull request. Let's build something delicious together!
