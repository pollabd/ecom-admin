# Full Stack E-Commerce - Dashboard & CMS

Welcome to the Full Stack E-Commerce project! This application provides a comprehensive solution for managing an e-commerce platform, including a **Dashboard** for administrators and a **Content Management System (CMS)** for managing products, orders, and other e-commerce functionalities. Built with modern web technologies, this project is designed to be scalable, performant, and developer-friendly.

---

## Features

- **Admin Dashboard**: Manage stores, products, orders, customers, and analytics.
- **Content Management System (CMS)**: Easily create, update, and delete products, categories, billboards, sizes, and colors.
- **Responsive Design**: Built with **Tailwind CSS** for a sleek and responsive user interface.
- **Database Integration**: Uses **Prisma** as the ORM to interact with a **PostgreSQL** database.
- **Authentication**: Secure user authentication and role-based access control using **Clerk**.
- **Modern Stack**: Built with **Next.js** (App Router), **React**, and **TypeScript** for a seamless developer experience.
- **API Routes**: Fully functional API routes for backend logic and data fetching.
- **Cloudinary Integration**: Manage product images seamlessly with Cloudinary.

---

## Technologies Used

- **Frontend**:
  - Next.js (App Router)
  - React
  - Tailwind CSS
  - TypeScript (optional)
- **Backend**:
  - Next.js API Routes
  - Prisma (ORM)
- **Database**:
  - PostgreSQL
- **Authentication**:
  - Clerk (for user authentication)
- **Image Management**:
  - Cloudinary
- **Deployment**:
  - Vercel (recommended for Next.js apps)
  - Docker (optional for containerization)

---

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Git
- Cloudinary account (for image management)
- Clerk account (for authentication)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pollabd/ecom-admin.git
   cd ecom-admin
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory.
   - Add the following variables (replace placeholders with your actual values):
     ```env
     DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
     DATABASE_URL_UNPOOLED="postgresql://user:password@localhost:5432/dbname"
     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"
     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
     NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
     NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
     CLERK_SECRET_KEY="your-clerk-secret-key"
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
     ```

4. **Run database migrations**:

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Seed the database (optional)**:

   ```bash
   npx prisma db seed
   ```

6. **Start the development server**:

   ```bash
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
ecom-admin/
├── app/                  # Next.js App Router pages
├── components/           # Reusable React components
├── lib/                  # Utility functions and libraries
├── prisma/               # Prisma schema and migrations
├── public/               # Static assets
├── styles/               # Global and component-specific styles
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore file
├── next.config.js        # Next.js configuration
├── package.json          # Node.js dependencies and scripts
├── README.md             # Project documentation
└── tailwind.config.js    # Tailwind CSS configuration
```

---

## Environment Variables

The following environment variables are required to run the project:

| Variable Name                         | Description                                                  |
| ------------------------------------- | ------------------------------------------------------------ |
| `DATABASE_URL`                        | PostgreSQL database connection URL.                          |
| `DATABASE_URL_UNPOOLED`               | PostgreSQL database connection URL for unpooled connections. |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`   | Cloudinary cloud name for image management.                  |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | URL to redirect users after signing up.                      |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | URL to redirect users after signing in.                      |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`       | URL for the sign-up page.                                    |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`       | URL for the sign-in page.                                    |
| `CLERK_SECRET_KEY`                    | Secret key for Clerk authentication.                         |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`   | Publishable key for Clerk authentication.                    |

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
