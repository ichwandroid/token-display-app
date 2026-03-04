# Token Display App

A beautiful, real-time token display system built with Node.js, Express, and Socket.IO. With a modern iOS/macOS inspired glassmorphism UI, this application allows an admin to broadcast multiple tokens and their respective room names dynamically to a waiting room token display.

---

## 📸 Features

- **Real-Time Synchronization**: Uses WebSockets (`Socket.IO`) to instantly update the display as soon as the admin inputs the token.
- **Multiple Token Support**: Admins can dynamically add and push multiple tokens at once with corresponding room names.
- **Modern UI**: Smooth animations, drop shadows, background meshes, and glassmorphism styling give the app a premium, modern feel. 
- **Auto Expiration**: Tokens will automatically expire and the screen will revert to "Waiting" if left idle for 5 minutes.
- **Clean URLs**: Clean and simple routes like `/admin` and `/display` (without the `.html` extensions).
- **Responsive**: Adapts gracefully to different screen sizes.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed on your machine.
- [Node.js](https://nodejs.org/) (v14.x or higher recommended)

### Installation

1. Clone the repository (or download the source code):
   ```bash
   git clone <repository-url>
   cd token-display-app
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   *(Or simply run `node server.js`)*

4. Open your web browser:
   - **Admin Dashboard:** [http://localhost:3000/admin](http://localhost:3000/admin)
   - **Display Screen:** [http://localhost:3000/display](http://localhost:3000/display)

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express
- **Real-time Engine**: Socket.IO
- **Frontend**: Vanilla HTML, CSS, JavaScript

---

## 📂 Project Structure

```text
token-display-app/
├── public/
│   ├── admin.html     # Admin dashboard interface
│   └── display.html   # Main display screen interface
├── server.js          # Node.js Express & Socket.IO server backend
├── package.json       # Dependencies and npm scripts
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

---

## 📝 Usage Guide

1. **Open the Display page** on the monitor/TV that serves as the waiting room screen. It will initially show "MENUNGGU TOKEN" (Waiting for Token).
2. **Open the Admin page** on the operator's computer or smartphone.
3. Click **"+ Tambah Token"** to add an input field.
4. Fill in the **Token** (e.g., a queue number or code) and the **Nama Ruangan** (Room Name).
5. Add as many tokens as needed using the "+ Tambah Token" button.
6. Click **"Tampilkan di Layar"** (Show on Screen). 
7. The Display page will instantly update and play an animation showing the pushed tokens.
8. The token will clear automatically after 5 minutes, or you can dynamically override it by pushing new ones!
