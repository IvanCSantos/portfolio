export const ptBR = {
  header: {
    about: "Sobre",
    career: "Carreira",
    projects: "Projetos",
    curriculum: "Currículo",
    language: "Português",
  },
  home: {
    siteTitle: "Ivan Carlos DOS Santos",
    professionalTitle: "Desenvolvedor web full stack",
    textContent: [
      "Desenvolvo aplicações web acessíveis, escaláveis e com estrutura robusta.",
    ],
  },
  about: {
    textContent: [
      [
        "Olá, me chamo",
        { highlight: "  Ivan" },
        `, tenho ${calculateAge("1989/02/15")} anos.`,
      ],
      [
        "Sou estudante de",
        { highlight: " Ciência da Computação " },
        "e possuo mais de",
        { highlight: " 12 anos de experiência " },
        "em TI, incluindo atuação como Analista de TI em empresa multinacional, gerenciando infraestrutura no Brasil, EUA e Colômbia. Tenho sólida base em servidores, redes, automação e cloud.",
      ],
      [
        "Atualmente, foco minha transição para o",
        { highlight: " Desenvolvimento Web FullStack" },
        ", estudando",
        { highlight: " Java Spring Boot " },
        "e",
        { highlight: " React " },
        "por meio de cursos práticos (Rocketseat, Origamid, Alura, Algaworks, EBAC) e projetos reais, como um sistema frontend que estou desenvolvendo para a ACAFE via UNIVALI.",
      ],
    ],
    undergratuateDegree: {
      course: "Bacharel em Ciência da Computação",
      institution: "UNIVALI",
      date: "conclusão em 2025",
    },
    courses: [
      { course: "Formação ReactJs", school: "Rocketseat", hours: "19h" },
      { course: "React completo", school: "Origamid", hours: "18h" },
      { course: "React com Typescript", school: "Origamid", hours: "5h" },
      { course: "Especialista Java", school: "Algaworks", hours: "89h" },
      {
        course: "Formação Java Web Spring Boot",
        school: "Alura",
        hours: "40h",
      },
    ],
  },
  career: [
    {
      date: "JUL 2018 - ATUALMENTE",
      title: "Analista de TI",
      company: "Nuxstep",
      experience: [
        "Planejamento e execução de projetos de infraestrutura de TI",
        "Administração de servidores Linux e Windows",
        "Gerenciamento de storages e sistemas de backup",
        "Configuração e manutenção de soluções de hospedagem de e-mail e web",
        "Monitoramento de serviços",
        "Automação de tarefas com Shell Script e Python",
        "Desenvolvimento de projetos web frontend com React, HTML, CSS, Javascript",
        "Desenvolvimento e manutenção de sites e sistemas web com PHP e Wordpress",
      ],
    },
    {
      date: "SET 2012 - JUN 2018",
      title: "Analista de TI",
      company: "SCHOTTEL do Brasil",
      experience: [
        "Responsável pela administração do departamento de TI das filiais do Brasil, Colômbia e EUA",
        "Viagens internacionais para reuniões com time global de TI",
        "Atendimento de suporte hotline internacional aos colaboradores globais com base no timezone",
        "Administração de infraestrutura de rede e servidores, controle de acesso e gerenciamento de usuários",
        "Gestão de contratos de telefonia fixa, móvel e links dedicados",
        "Implementação e manutenção de sistemas de backup",
        "Administração de servidores Windows Server (Exchange, Sharepoint, File Server)",
        "Produção de documentação técnica e instruções internas para padronização de processos",
        "Gerenciamento de ciclo de vida de ativos de TI, gestão orçamentária e aquisição de equipamentos",
      ],
    },
  ],
  projects: {
    highlights: [
      {
        name: "Ivan Santos - Portfolio",
        description: "Este portfólio que você está vendo",
        tags: ["React", "Typescript", "Javascript", "Tailwind CSS"],
        github: "https://github.com/IvanCSantos/portfolio",
        liveUrl: "https://ivansantos.dev",
      },
      {
        name: "Portal Plurio",
        description:
          "Portal de administração de tokens de integração de sistemas de assinatura digital do pluriosign, para a empresa Plurio, do grupo Safepar",
        tags: ["React", "Typescript", "MaterialUI"],
        github: "",
        liveUrl: "",
      },
      {
        name: "API Plano de Ação",
        description:
          "Um projeto desenvolvido para participação em um processo seletivo de uma vaga Full Stack - Java",
        tags: [
          "Java",
          "Java Spring Boot",
          "JPA",
          "Lombok",
          "API Rest",
          "Docker",
        ],
        github: "https://github.com/IvanCSantos/omd-planoacao-backend",
        liveUrl: "",
      },
      {
        name: "Frontend Plano de Ação",
        description:
          "Um projeto desenvolvido para participação em um processo seletivo de uma vaga Full Stack - React",
        tags: [
          "React",
          "Typescript",
          "Tailwind CSS",
          "Integração API",
          "Vite",
          "Docker",
        ],
        github: "https://github.com/IvanCSantos/omd-planoacao-frontend",
        liveUrl: "https://planoacao.portfolio.ivansantos.dev",
      },
    ],
    others: [
      {
        name: "A.N.I.T.A.",
        description:
          "Sistema de gerenciamento de matriz curricular em cursos de graduação e pós-graduação em universidades do sistema Acafe - desenvolvido via UNIVALI",
        tags: ["React", "HTML", "CSS", "Javascript"],
        github: "",
        liveUrl: "https://anita.labsc.dev.br",
      },
      {
        name: "Tecboard",
        description:
          "Portal de publicação de eventos de tecnologia, desenvolvido durante o curso de React da Alura",
        tags: ["React", "HTML", "CSS", "Typescript"],
        github: "https://github.com/IvanCSantos/alura-tecboard",
        liveUrl: "https://tecboard.portfolio.ivansantos.dev",
      },
      {
        name: "Clone Tabnews",
        description:
          "Projeto clone do site tabnews, desenvolvido para estudos com o curso.dev",
        tags: ["Node.js", "Javascript", "Jest", "APIs"],
        github: "https://github.com/IvanCSantos/clone-tabnews",
        liveUrl: "",
      },
      {
        name: "Game API",
        description:
          "Um projeto desenvolvido para estudo de Java Spring Boot durante o Intensivão Dev Superior",
        tags: ["Java", "Java Spring Boot", "Docker"],
        github: "https://github.com/IvanCSantos/game-api",
        liveUrl: "",
      },
      {
        name: "DOGs",
        description:
          "Uma rede social para cachorros desenvolvida durante o curso React completo da Origamid",
        tags: ["React", "HTML", "CSS", "Javascript"],
        github: "https://github.com/IvanCSantos/origamid-react-projeto-final",
        liveUrl: "",
      },
      {
        name: "Bind DNS Blacklist",
        description:
          "Script para gerenciar bloqueios de domínios no sistema de DNS Bind",
        tags: ["Python", "Shell Script", "API", "Automação"],
        github: "https://github.com/IvanCSantos/add-domains-to-bind-blacklist",
        liveUrl: "",
      },
    ],
  },
  curriculum: {},
};

export const en = {
  header: {
    about: "About",
    career: "Career",
    projects: "Projects",
    curriculum: "Curriculum",
    language: "Inglês",
  },
  home: {
    siteTitle: "Ivan Carlos DOS Santos",
    professionalTitle: "Full Stack web developer",
    textContent: [
      "I develop accessible, scalable web applications with a robust structure.",
    ],
  },
  about: {
    textContent: [
      [
        "Hi, my name is",
        { highlight: "  Ivan" },
        `, I’m ${calculateAge("1989/02/15")} years old.`,
      ],
      [
        "I am a ",
        { highlight: " Computer Science " },
        " student and have more than",
        { highlight: " 12 years of experience " },
        "in IT, including working as an IT Analyst in a multinational company, managing infrastructure in Brazil, USA and Colombia. I have a solid foundation in servers, networks, automation and cloud.",
      ],
      [
        "Currently, I focus on my transition to",
        { highlight: " Full Stack Web Development" },
        ", studying",
        { highlight: " Java Spring Boot " },
        "and",
        { highlight: " React " },
        "through practical courses and real projects, such as a frontend system that I am developing for ACAFE via UNIVALI.",
      ],
    ],
    undergratuateDegree: {
      course: "Bachelor of Science in Computer Science",
      institution: "UNIVALI",
      date: "expected graduation in 2025",
    },
    courses: [
      { course: "ReactJs Course", school: "Rocketseat", hours: "19h" },
      { course: "Complete ReactJs", school: "Origamid", hours: "18h" },
      { course: "React with Typescript", school: "Origamid", hours: "5h" },
      { course: "Java specialist", school: "Algaworks", hours: "89h" },
      {
        course: "Java Spring Boot Web Training",
        school: "Alura",
        hours: "40h",
      },
    ],
  },
  career: [
    {
      date: "JUL 2018 - CURRENT",
      title: "IT Analyst",
      company: "Nuxstep",
      experience: [
        "Planning and execution of IT infrastructure projects",
        "Administration of Linux and Windows servers",
        "Management of storage and backup systems",
        "Configuration and maintenance of email and web hosting solutions",
        "Service monitoring",
        "Task automation with Shell Script and Python",
        "Development of frontend web projects with React, HTML, CSS, Javascript",
        "Development and maintenance of websites and web systems with PHP and Wordpress",
      ],
    },
    {
      date: "SEP 2012 - JUN 2018",
      title: "IT Analyst",
      company: "SCHOTTEL do Brasil",
      experience: [
        "Responsible for managing the IT department of branches in Brazil, Colombia and the USA",
        "International travel for meetings with the global IT team",
        "International hotline support service for global employees based on timezone",
        "Administration of network infrastructure and servers, access control and user management",
        "Management of fixed and mobile telephone contracts and dedicated links",
        "Implementation and maintenance of backup systems",
        "Administration of Windows Server servers (Exchange, Sharepoint, File Server)",
        "Production of technical documentation and internal instructions for process standardization",
        "IT asset lifecycle management, budget management and equipment acquisition",
      ],
    },
  ],
  projects: {
    highlights: [
      {
        name: "Ivan Santos - Portfolio",
        description: "This portfolio you are viewing",
        tags: ["React", "Typescript", "Javascript", "Tailwind CSS"],
        github: "https://github.com/IvanCSantos/portfolio",
        liveUrl: "https://ivansantos.dev",
      },
      {
        name: "Plurio Portal",
        description:
          "Administration portal for integration tokens of digital signature systems from Pluriosign, for the company Plurio, part of the Safepar group",
        tags: ["React", "Typescript", "MaterialUI"],
        github: "",
        liveUrl: "",
      },
      {
        name: "Action Plan API",
        description:
          "A project developed for participation in a selection process for a Full Stack position - Java.",
        tags: [
          "Java",
          "Java Spring Boot",
          "JPA",
          "Lombok",
          "API Rest",
          "Docker",
        ],
        github: "https://github.com/IvanCSantos/omd-planoacao-backend",
        liveUrl: "",
      },
      {
        name: "Action Plan Frontend",
        description:
          "A project developed for participation in a selection process for a Full Stack position - React.",
        tags: [
          "React",
          "Typescript",
          "Tailwind CSS",
          "Integração API",
          "Vite",
          "Docker",
        ],
        github: "https://github.com/IvanCSantos/omd-planoacao-frontend",
        liveUrl: "https://planoacao.portfolio.ivansantos.dev",
      },
    ],
    others: [
      {
        name: "A.N.I.T.A.",
        description:
          "Management of undergraduate and postgraduate courses at universities in the Acafe system - developed via UNIVALI",
        tags: ["React", "HTML", "CSS", "Javascript"],
        github: "",
        liveUrl: "https://anita.labsc.dev.br",
      },
      {
        name: "Tecboard",
        description:
          "Technology events publishing portal, developed during Alura's React course",
        tags: ["React", "HTML", "CSS", "Typescript"],
        github: "https://github.com/IvanCSantos/alura-tecboard",
        liveUrl: "https://tecboard.portfolio.ivansantos.dev",
      },
      {
        name: "Clone Tabnews",
        description:
          "Clone project of the tabnews website, developed for studies with curso.dev",
        tags: ["Node.js", "Javascript", "Jest", "APIs"],
        github: "https://github.com/IvanCSantos/clone-tabnews",
        liveUrl: "",
      },
      {
        name: "Game API",
        description:
          "A project developed to study Java Spring Boot during the Higher Dev Intensive",
        tags: ["Java", "Java Spring Boot", "Docker"],
        github: "https://github.com/IvanCSantos/game-api",
        liveUrl: "",
      },
      {
        name: "DOGs",
        description:
          "A social network for dogs developed during Origamid's complete React course",
        tags: ["React", "HTML", "CSS", "Javascript"],
        github: "https://github.com/IvanCSantos/origamid-react-projeto-final",
        liveUrl: "",
      },
      {
        name: "Bind DNS Blacklist",
        description: "Script to manage domain blocks in Bind DNS system",
        tags: ["Python", "Shell Script", "API", "Automation"],
        github: "https://github.com/IvanCSantos/add-domains-to-bind-blacklist",
        liveUrl: "",
      },
    ],
  },
  curriculum: {},
};

function calculateAge(dob: string): number {
  const today = new Date();
  const birthday = new Date(dob);

  let age = today.getFullYear() - birthday.getFullYear();

  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const birthMonth = birthday.getMonth();
  const birthDay = birthday.getDate();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}
