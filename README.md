# 🎬 QuickFicks

**QuickFicks** is a modern **Next.js** application for uploading and managing video reels using **ImageKit**. It includes user authentication, a stylish video feed, and a clean, responsive UI powered by Tailwind CSS and DaisyUI.

---

## 🚀 Features

- 🔐 **User Authentication** with NextAuth.js (JWT)
- 📹 **Video Upload & Streaming** via ImageKit
- 🎨 **Beautiful UI** using Tailwind CSS + DaisyUI
- ⚡ **Fast & Scalable** with Next.js 15 and React 19
- 💾 MongoDB Database Integration with Mongoose
- 📱 Fully Responsive Design (Mobile-first)
- 🧠 Type-safe Codebase with TypeScript

---

## 🛠️ Tech Stack

| Area           | Technology            |
| -------------- | --------------------- |
| Frontend       | Next.js 15, React 19  |
| Styling        | Tailwind CSS, DaisyUI |
| Authentication | NextAuth.js (JWT)     |
| File Storage   | ImageKit              |
| Database       | MongoDB + Mongoose    |
| Forms          | React Hook Form       |
| Language       | TypeScript            |

---

## 📦 Prerequisites

Before starting, ensure you have:

- Node.js (LTS version)
- MongoDB (Local or Atlas)
- ImageKit Account (with public & private keys)

---

## 🧑‍💻 Getting Started

1. **Clone the repository**:

   ```bash
   git clone <your-repository-url>
   cd quickficks

   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   - Copy `.env.example` to `.env`
   - Fill in all necessary keys as shown below

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

---

## 🔐 Environment Variables

Create a `.env` file at the project root with the following:

```env
# MongoDB
MONGODB_URI=

# NextAuth
NEXTAUTH_SECRET=

# ImageKit
NEXT_PUBLIC_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_URL_ENDPOINT=https://ik.imagekit.io/your_path/
```

---

## 🗂️ Project Structure

```
quickficks/
├── app/                   # Next.js 15 app directory
│   ├── api/               # API routes (auth, upload)
│   ├── components/        # Reusable UI components
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── upload/            # Video upload functionality
│   └── page.tsx           # Home page (video feed)
├── lib/                   # Utility functions
├── models/                # Mongoose database models
├── public/                # Static files and assets
├── types.d.ts             # Global TypeScript types
├── .env.example           # Sample env file
└── README.md              # Project documentation
```

---

## 📜 Available Scripts

| Script          | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start local development server |
| `npm run build` | Create a production build      |
| `npm run start` | Start production server        |
| `npm run lint`  | Run ESLint to fix code issues  |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

Built with ❤️ using **Next.js**, **ImageKit**, and **(Daisy UI)Tailwind CSS**.
