import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = t("projects", {
    returnObjects: true,
  });
  const projectData = [
    {
      title: "IoT Smart Home",
      description:
        "Developed a React application for a smart home system, integrating with devices installed around the house. Utilized Firebase for real-time push notifications to alert users of device status changes, enhancing home security and automation.",
    },
    {
      title: "Continent",
      description:
        "Developed a marketing page for a trading market using Vanilla JavaScript. Integrated APIs to fetch real-time data from market exchanges, providing users with up-to-date information on trading options.",
    },
    {
      title: "Gardens",
      description:
        "Created a responsive website for a landscaping company based in England using React. Focused on delivering a user-friendly interface to showcase the company’s services effectively.",
      link: "http://gardens247.co.uk/",
    },
    {
      title: "Axelar Wrapper",
      description:
        "Contributed to the development of a secure integration wrapper for the Axelar Network using AssemblyScript. The wrapper supports cross-chain token transfers.",
      link: "https://github.com/ConsiderItDone/axelar-wrapper",
    },
    {
      title: "DAO Wallet",
      description:
        "Participated in the development of WebAssembly Web3 wallet, which allows users to interact with decentralized applications (DApps) and allows users to securely manage their cryptocurrency assets and NFT, including sending and receiving transactions.",
      link: "https://github.com/ConsiderItDone/dao-wallet",
    },
    {
      title: "OmniTech",
      description:
        "Took part in the development of the application a platform to store, index, and provide custom access to cross-chain data. Focused on user interface design.",
      link: "https://omnitech.one/",
    },
    {
      title: "Consider It Done Technologies",
      description:
        "Designed and implemented a marketing page, utilizing modern UI/UX principles to boost user engagement.",
      link: "https://consideritdone.tech/",
    },
    {
      title: "DaoSign",
      description: `Participated in the development of a decentralized platform for agreements featuring cryptographic proofs-of-signature, specifically designed for DAOs. Over a period of two years, I contributed to various components, including both the main application and the marketing page. The DAOsign application was built using Next.js and React for the frontend, which facilitated seamless user interactions. It incorporated GraphQL for efficient data handling and urql as a client, providing a robust API communication framework. Key features included the use of Framer Motion for animations and IPFS for secure, decentralized file storage. Security and user authentication were enhanced with Metamask and WalletConnect integrations. The marketing page, which aimed to boost user engagement, was also built using React and Next.js, focusing on modern UI/UX principles.`,
    },
  ];

  return (
    <section className="projects-section container">
      <h2 style={{ marginBottom: "20px" }}>{t("general.projects")}</h2>
      <ul className="projects-list">
        {projects.map((project, index) => {
          console.log(projectData[index].link);

          return (
            <li key={index} className="project-item">
              <strong>{project.title}:</strong> {project.description}
              {projectData[index].link && (
                <a
                  href={projectData[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projectData[index].link}
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <div className="doa-links">
        <a
          href="https://testnet.daosign.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test Application
        </a>
        <a href="https://daosign.org" target="_blank" rel="noopener noreferrer">
          Marketing Page
        </a>
        <a
          href="https://github.com/DAOsign"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github DAOsign
        </a>
      </div>
      <span style={{ color: "var(--greyPink)", display: "block" }}>
        {t("general.note")}
      </span>
      <span
        style={{
          color: "var(--greyText)",
          display: "block",
          width: "fit-content",
          marginTop: "30px",
        }}
      >
        {t("general.ps")}
      </span>
    </section>
  );
};

export default Projects;
