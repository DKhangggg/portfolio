import SkillCard from "../components/SkillCard";
import BlurText from "../components/BlurText";

export function SkillsTech() {
  return (
    <section
      id="about-me"
      className="min-h-screen min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-6xl md:text-6xl font-bold text-center mb-12">
        <BlurText
          text="SKILLS & TECHNOLOGIES"
          delay={500}
          animateBy="words"
          direction="top"
          className="text-6xl mb-8"
        />
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:items-start gap-12 lg:gap-16 mt-12 px-6">
        <div className="flex flex-row gap-6">
          <SkillCard title="BACKEND">
            <ul>
              <li>
                <strong>Java:</strong> OOP, Collections, Stream API, Exception
                Handling, Multithreading, JSP, Servlet.
              </li>
              <li>
                <strong>Databasse:</strong> MySQL, SQL Server, PostgreSQL,
                MongoDB.
              </li>
              <strong>Spring Framework:</strong>Spring Boot, Spring MVC, Spring
              Data JPA, Hibernate, Spring Security
              <li>
                <strong>RESTful API Design:</strong>RESTful API Design, JSON,
                JWT Authentication, OAuth2 (Google Login), Exception Handling.
              </li>
            </ul>
          </SkillCard>
          <SkillCard title="FRONTEND">
            <ul>
              <li>
                <strong>Library:</strong> React, React Native, HTML5, CSS3,
                JavaScript (ES6+), Bootstrap, TypeScript (basic)
              </li>
              <li>
                <strong>Databasse:</strong> MySQL, SQL Server, PostgreSQL,
                MongoDB.
              </li>
              <strong>template engine:</strong> Thymeleaf, JSP
              <li>
                <strong>
                  RESTful API Design, JSON, JWT Authentication, OAuth2 (Google
                  Login), Exception Handling.
                </strong>
              </li>
            </ul>
          </SkillCard>
          <SkillCard title="DEVOPS" children="Docker, Kubernetes, AWS" />
        </div>
      </div>
    </section>
  );
}
