import SkillCard from "../components/SkillCard";
import BlurText from "../components/BlurText";

export function SkillsTech() {
  return (
    <section
      id="skills"
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
              <li>
                <strong>Spring Framework:</strong>Spring Boot, Spring MVC,
                Spring Data JPA, Hibernate, Spring Security
              </li>
              <li>
                <strong>RESTful API Design:</strong>RESTful API Design, JSON,
                JWT Authentication, OAuth2 (Google Login), Exception Handling,
                WebFlux reactive, Spring Cloud Gateway.
              </li>
              <li>
                <strong>architecture design:</strong> Microservices, Monolithic,
                Event-Driven Architecture.
              </li>
            </ul>
          </SkillCard>
          <SkillCard title="FRONTEND">
            <ul>
              <li>
                <strong>Library:</strong> React, React Native, HTML5, CSS3,
                JavaScript (ES6+), Bootstrap, TypeScript (basic), nextJS.
              </li>
              <li>
                <strong>Databasse:</strong> MySQL, SQL Server, PostgreSQL,
                MongoDB.
              </li>
              <strong>template engine:</strong> Thymeleaf, JSP.
              <li>
                <strong>State Management:</strong> Redux, Context API.
              </li>
              <li>
                <strong>HTTP Client:</strong> Axios, Fetch API.
              </li>
              <li>
                <strong>Component Libraries:</strong> Material-UI, Ant
                Design,Shadcnui, Tailwind CSS, DaisyUI,chakra-ui.
              </li>
            </ul>
          </SkillCard>
          <SkillCard title="ANOTHER SKILL">
            <ul>
              <li>
                <strong>Container:</strong> Docker, Kubernetes.
              </li>
              <li>
                <strong> AWS services:</strong> EC2, S3, RDS.
              </li>
              <strong>Github:</strong>
              <ul>
                <li>
                  <strong>Version Control:</strong> Git, GitHub, GitLab.
                </li>
                <li>
                  <strong>CI/CD:</strong> GitHub Actions, Jenkins, Travis CI.
                </li>
              </ul>
              <li>
                <strong>API Testing:</strong> Postman, Swagger/OpenAPI.
              </li>
              <strong>English:</strong>
              <ul>
                <li>
                  Fluent in reading technical docs and writing technical
                  documentation.
                </li>
                <li>Comfortable in spoken English for team collaboration.</li>
              </ul>
            </ul>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
