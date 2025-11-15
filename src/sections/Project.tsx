import GradientCard from "../components/GradientCard";
import BlurText from "../components/BlurText";

export function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen min-h-screen flex flex-col justify-center items-center py-16"
    >
      <h1 className="text-6xl md:text-6xl font-bold text-center mb-12">
        <BlurText
          text="PROJECTS"
          delay={500}
          animateBy="words"
          direction="top"
          className="text-6xl mb-8"
        />
      </h1>
      <div className="flex flex-col lg:flex-row gap-2 justify-center flex-wrap px-1">
        <GradientCard className="min-w-[300px] lg:min-w-[600px] p-4 h-[500px] w-[600px]">
          <h3 className="text-2xl font-bold mb-4 text-white">
            {" "}
            EV Station-based Rental System (Mobile App)
          </h3>
          <h4>08/2025 - 10/2025</h4>
          <p className="text-lg text-white">
            Team size: 5 | Role: Mobile Developer |{" "}
            <a
              href="https://github.com/LeThiYenVi/EV-Station-based-Rental-System"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-300 hover:text-blue-200 hover:underline transition-all"
            >
              Github
            </a>
          </p>

          <ul>
            <li>
              <strong className="font-bold underline">Description:</strong>{" "}
              Mobile platform for renting electric vehicles at charging stations
              with real-time tracking, booking management, and payment
              integration. <br />
            </li>
            <li>
              <strong className="font-bold underline">Responsibilities:</strong>
            </li>
            <li>
              <ul>
                <li>
                  {" "}
                  Developed cross-platform mobile app using React Native.
                  Integrated Google Maps API for station location and
                  navigation. Implemented user authentication, vehicle
                  booking/return, and transaction history. Connected to Spring
                  Boot backend via RESTful APIs. Managed app state and local
                  storage for offline support. <br />
                </li>
                <li>
                  <strong className="font-bold underline">Technologies:</strong>{" "}
                  React Native, JavaScript, Google Maps, API, RESTful API
                  integration.
                </li>
              </ul>
            </li>
          </ul>
        </GradientCard>
        <GradientCard className="min-w-[300px] lg:min-w-[600px] p-4 h-[500px] w-[600px]">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Gender Healthcare Management System
          </h3>
          <h4>05/2025 - 08/2025</h4>
          <p className="text-lg text-white">
            Team size: 2 | Role: FullStack Developer | Github:
            <a
              href="https://github.com/LeThiYenVi/SWP391_FE"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-300 hover:text-blue-200 hover:underline transition-all"
            >
              {" "}
              FE
            </a>{" "}
            &{" "}
            <a
              href="https://github.com/DKhangggg/BE-SWP391"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-300 hover:text-blue-200 hover:underline transition-all"
            >
              {" "}
              BE{" "}
            </a>
          </p>

          <ul>
            <li>
              <strong className="font-bold underline">Description:</strong> A
              full-stack healthcare management platform with secure user
              authentication, appointment scheduling, medical records
              management, and online payment integration.
              <br />
            </li>
            <li>
              <strong className="font-bold underline">
                Backend Responsibilities & Frontend Responsibilities:
              </strong>
            </li>
            <li>
              {" "}
              Built a responsive Admin Dashboard using React & Tailwind CSS,
              integrating backend APIs.
            </li>
            <li>
              Designed & implemented 15+ RESTful APIs (Java Spring Boot) for
              core services (auth, scheduling, transactions). Built robust
              security (Spring Security, JWT, RBAC) and integrated OAuth2
              (Google Login).
            </li>
            <li>
              <strong className="font-bold underline">Technologies:</strong>{" "}
              Java | Spring Boot | Spring Security | JPA/Hibernate | MSSQL |
              React | Git
            </li>
          </ul>
        </GradientCard>
        <GradientCard className="min-w-[300px] lg:min-w-[600px] p-4 h-[500px] w-[600px]">
          <h3 className="text-2xl font-bold mb-4 text-white">
            E-Commerce web platform
          </h3>
          <h4>02/2025 - 04/2025</h4>
          <p className="text-lg text-white">
            {" "}
            Team size: 1 | Role: FullStack Developer |{" "}
            <a
              href="https://github.com/DKhangggg/Ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-300 hover:text-blue-200 hover:underline transition-all"
            >
              Github
            </a>
          </p>

          <ul>
            <li>
              <strong className="font-bold underline">Description:</strong> A
              fullstack web platform for a full-featured e-commerce platform
              that supports product catalog, shopping cart, checkout & payments,
              order lifecycle, user accounts, and admin management.
              <br />
            </li>
            <li>
              <strong className="font-bold underline">
                Backend Responsibilities & Frontend Responsibilities:
              </strong>
            </li>
            <li>
              {" "}
              Backend Developer — Java/Spring Boot e‑commerce (products, cart,
              checkout, orders, users; microservices).
            </li>
            <li>
              Implemented 20+ REST APIs, JWT/RBAC, Google OAuth2, JPA
              transactions, Docker & GitHub Actions.
            </li>
            <li>
              <strong className="font-bold underline">Technologies:</strong>{" "}
              Java, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL,
              JWT; Docker, Swagger, GitHub Actions, GRPC, Openfeign, nextJS,
              React, Typescript.
            </li>
          </ul>
        </GradientCard>
      </div>
    </section>
  );
}
