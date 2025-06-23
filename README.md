# NxtCareer_AI

## 🚀 Welcome to NxtCareer\_AI\!

NxtCareer\_AI** is an intelligent web application designed to help students and professionals make informed career decisions. Leveraging the power of AI, our platform provides personalized career path recommendations, skill development guidance, and insights into future job market trends.

**Explore the deployed project here: [NxtCareer\_AI Live](https://nxtcareerai.vercel.app)**

## ✨ Features

  * **Personalized Career Recommendations:** Get tailored career suggestions based on your interests, skills, and academic background.
  * **Skill Gap Analysis:** Identify the skills you need to acquire to reach your desired career goals.
  * **Learning Resources:** Discover relevant courses, certifications, and educational content to bridge skill gaps.
  * **Job Market Insights:** Stay updated with the latest trends, in-demand skills, and emerging job roles.
  * **Interactive User Interface:** A user-friendly and intuitive design for a seamless experience.

-----

## 🎯 Our Mission

In today's rapidly evolving job market, choosing the right career path can be challenging. NxtCareer\_AI aims to simplify this process by providing data-driven insights and AI-powered guidance, empowering individuals to build successful and fulfilling careers.

-----

## 🛠️ Technologies Used

### Frontend

  * **Next.js:** A React framework for building fast and scalable web applications.
  * **Tailwind CSS:** A utility-first CSS framework for rapidly styling your application.
  * **Shadcn UI:** A collection of re-usable components for building beautiful user interfaces.

### Backend & Database

  * **Next.js (API Routes):** For building robust and efficient backend API endpoints.
  * **Prisma:** A next-generation ORM (Object-Relational Mapper) for Node.js and TypeScript, making database access easy and type-safe.
  * **Neon DB (PostgreSQL):** A serverless PostgreSQL database, offering scalability and flexibility.

### AI & Tools

  * **Inngest:** For handling background jobs and reliable task execution.
  * **Gemini API:** Powering the AI recommendations and intelligent insights.

-----

## ⚙️ Installation & Local Setup

To set up and run NxtCareer\_AI locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Ayushwan2004/NxtCareer_AI.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd NxtCareer_AI
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Configure Environment Variables:**
    Create a `.env` file in the root of your project and add the necessary environment variables. These will include your database connection string and API keys.

    ```
    DATABASE_URL="YOUR_NEON_DATABASE_URL"
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
    INNGEST_SIGNING_KEY="YOUR_INNGEST_SIGNING_KEY"
    INNGEST_EVENT_KEY="YOUR_INNGEST_EVENT_KEY"
    # Add any other environment variables your project uses
    ```

    *(**Important:** Replace the placeholder values with your actual credentials. Never commit your `.env` file to version control.)*

5.  **Run Prisma Migrations (if applicable):**
    If you've made changes to your Prisma schema, apply migrations to your database:

    ```bash
    npx prisma migrate dev --name init
    ```

    *(Replace `init` with a meaningful name for your migration)*

6.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application should now be running on your local machine, typically at `http://localhost:3000`.

-----

## 🤝 Contributing

We welcome contributions to NxtCareer\_AI\! If you have ideas for new features, bug fixes, or improvements, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## 📞 Contact

If you have any questions, feedback, or just want to connect, feel free to reach out\!

  * **Ayushwankhede:** ayushwankhede9@yahoo.com
  * For More reference visit my Portfolio : https://ayushwankhede.vercel.app
