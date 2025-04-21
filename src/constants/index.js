const navLinks = [
  {
    name: "Works",
    link: "#works",
  },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Skills",
    link: "#skills",
  }
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" }
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  // { value: 46, suffix: "+", label: "Satisfied Clients" },
  { value: 76, suffix: "+", label: "GitHub Repositories" },
  { value: 46, suffix: "+", label: "Completed Projects" },
  { value: 2000, suffix: "+", label: "Hours of Coding" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
  { value: 12, suffix: "+", label: "Technologies Learned" },
  { value: 3, suffix: "+", label: "Group Projects" },
  { value: 100, suffix: "%", label: "Coursework Completed" },
  { value: 5, suffix: "+", label: "Collaborations" },
];

const logoIconsList = [
  {
    imgPath: "/logos/adobe.png",
  },
  {
    imgPath: "/logos/figma.png",
  },
  {
    imgPath: "/logos/hostinger.png",
  },
  {
    imgPath: "/logos/microsoft.png",
  },
  {
    imgPath: "/logos/shopify.png",
  },
  {
    imgPath: "/logos/versel.png",
  },
  {
    imgPath: "/logos/nx-workspace.png",
  },
  {
    imgPath: "/logos/vite.png",
  },
  {
    imgPath: "/logos/kubernetes.png",
  },
  {
    imgPath: "/logos/proxmox.png",
  },
  {
    imgPath: "/logos/expressjs.png",
  },
  {
    imgPath: "/logos/nestjs.png",
  },
  {
    imgPath: "/logos/typescript.png",
  },
  {
    imgPath: "/logos/azure.png",
  },
  {
    imgPath: "/logos/nextjs.png",
  },
  {
    imgPath: "/logos/vscode.png",
  },
  {
    imgPath: "/logos/visual-studio.png",
  },
  {
    imgPath: "/logos/mongodb.png",
  },
  {
    imgPath: "/logos/postgresql.png",
  },
  {
    imgPath: "/logos/mysql.png",
  },
  {
    imgPath: "/logos/mariadb.png",
  },
  {
    imgPath: "/logos/tailwindcss.png",
  },
  {
    imgPath: "/logos/shadcn.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Angular",
    modelPath: "/models/angular-logo.glb",
    scale: 6.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.9,
    rotation: [0, 0, 0],
  },
  {
    name: "HTML-5",
    modelPath: "/models/html-5-logo.glb",
    scale: 4,
    rotation: [0, 0, 0],
  },
  {
    name: "CSS",
    modelPath: "/models/css-logo.glb",
    scale: 4,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/node-transformed.glb",
    scale: 6,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "C#",
    modelPath: "/models/c-sharp-logo.glb",
    scale: 0.09,
    rotation: [0,0, 0],
  },
  {
    name: "ThreeJs",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.06,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "GitHub",
    modelPath: "/models/github-logo.glb",
    scale: 6,
    rotation: [0, 0, 0],
  },
  {
    name: "Docker",
    modelPath: "/models/docker-logo.glb",
    scale: 1.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Linux",
    modelPath: "/models/linux-logo.glb",
    scale: 0.06,
    rotation: [0,0, 0],
  },
  {
    name: "Arch Linux",
    modelPath: "/models/arch-logo.glb",
    scale: 1,
    rotation: [0,0, 0],
  },
  {
    name: "AWS",
    modelPath: "/models/aws-logo.glb",
    scale: 0.5,
    rotation: [0,0, 0],
  },
  // {
  //   name: "Microsoft",
  //   modelPath: "/models/microsoft-logo.glb",
  //   scale: 5,
  //   rotation: [0,0, 0],
  // }
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
