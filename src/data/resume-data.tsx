import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  XiaomiLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Xinya Yan",
  initials: "XY",
  location: "Madison, Wisconsin",
  locationLink: "https://www.wisc.edu",
  about:
    "CS & Math Undergraduate student @ UW-Madison",
  summary:
    "I am widely interested in deep learning, especially the field of Generative AI (diffusion model, transformers...). Actively looking for Summer 2024 internship and research opportunities",
  avatarUrl: "https://avatars.githubusercontent.com/u/93697869",
  personalWebsiteUrl: "https://yanxy.xyz",
  contact: {
    email: "xyan89@wisc.edu",
    tel: "+1 6084229653",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/xinyayan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shinyayan/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/shinya_yan",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Wisconsin-Madison",
      degree: "Bachelor's Degree in Computer Science GPA: 3.978/4.0",
      start: "Sept 2021",
      end: "May 2025 (expected)",
    },
    {
      school: "High School Affiliated to Renmin University of China",
      degree: "Cambridge International AS & A Level program",
      start: "Sept 2018",
      end: "June 2021",
    },
  ],
  work: [
    {
      company: "Xiaomi Technology",
      link: "https://www.mi.com/us",
      badges: ["Internship"],
      title: "Machine Learning Engineer",
      logo: XiaomiLogo,
      start: "July 2023",
      end: "Sept 2023",
      description:
        "Participated in a pioneering image deblurring project, emphasizing the integration of Segment Anything Model (SAM) to address non-uniform image blurring. Focused on optimizing image clarity by blending SAM-generated segmentation masks with image encoding. Utilized the Adam optimizer for model refinement, and rigorously evaluated enhancements using PSNR and SSIM metrics, significantly boosting the performance and accuracy of Xiaomi’s image enhancement technologies.",
    },
    {
      company: "Foxit Software",
      link: "https://foxit.com",
      badges: ["Internship"],
      title: "C++ Testing Engineer Intern",
      logo: ClevertechLogo,
      start: "May 2023",
      end: "June 2023",
      description:
        "C++ Unit Testing: Utilized Google Unit Test framework to perform meticulous unit testing on core codes, ensuring the stability and reliability of the software. Developed and executed detailed test cases, focusing on the functionality of PDF file manipulation and character encoding/decoding, resulting in robust and error-free software components.",
    },
  ],
  skills: [
    "Python",
    "Java",
    "C/C++",
    "SQL",
    "PyTorch",
    "TensorFlow",
    "NumPy",
    "Pandas",
    "Spark",
    "Cassandra",
    "Kafka",
    "MySQL",
    "NoSQL",
    "BigQuery",
  ],
  projects: [
    {
      title: "Cassandra-Parquet Data Integration and gRPC Implementation",
      techStack: ["Cassandra", "Apache Spark", "gRPC"],
      description:
        "Efficiently managed and processed a dataset of 123,346 lines of GHCNd stations data, demonstrating skill in data handling and optimization. Integrated Cassandra databases with Apache Spark to streamline data processing and storage, focusing on efficient data management. Utilized Apache Spark for data conversion to the Parquet format, enhancing data storage efficiency. Implemented gRPC for effective client-server communication, enhancing CQL query processing and data exchange.",
    },
    {
      title: "Bike Sharing Demand Analysis and Prediction",
      techStack: ["scikit-learn", "Support Vector Machine", "Random Forest"],
      description:
        "Analyzed the Kaggle Bike Sharing Demand dataset, focusing on data distribution and key features like time, season, and temperature. Conducted comprehensive data preprocessing, including date handling, missing value treatment, and anomaly detection. Developed predictive models using Support Vector Machine and Random Forest algorithms using scikit-learn",
    },
  ],
} as const;