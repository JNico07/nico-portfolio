export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Contact',
      href: '#email.me',
    },
    {
      id: 4,
      name: 'Work',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'GazeGuard - Monitor and Limit Screen Time',
      desc: "GazeGuard is an android app designed to help monitor and limit screen time, promoting healthy digital habits and protecting well-being. With eye-tracking technology, GazeGuard tracks real-time screen usage and provides tools to set, manage, and enforce screen time limits. The app automatically locks the device when reaches the set screen time limit, ensuring a balanced and controlled digital experience.",
      subdesc:
        'Built with Android Studio, Java, Yolov5, PyTorch, Firebase, and Roboflow, GazeGuard combines powerful technologies in a user-friendly interface.',
      href: 'https://jnico07.github.io/GazeGuard-Web/',
      texture: '/textures/project/GazeGuard.mp4',
      logo: '/assets/logo-gazeguard.webp',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Android Studio',
          path: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png',
        },
        {
          id: 2,
          name: 'Java',
          path: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000',
        },
        {
          id: 3,
          name: 'Firebase',
          path: 'https://brandeps.com/logo-download/F/Firebase-logo-02.png',
        },
        {
          id: 4,
          name: 'Yolov5',
          path: 'https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64994922cf2a6385a4bf4489_UltralyticsYOLO_mark_blue.svg',
        },
      ],
    },
    {
      title: '...',
      desc: '...',
      subdesc:
        '...',
      href: '#',
      texture: '/textures/project/loading.mp4',
      logo: 'https://cdn-icons-png.freepik.com/512/4992/4992624.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: '...',
          path: '/assets/loading.png',
        },
        {
          id: 2,
          name: '...',
          path: '/assets/loading.png',
        },
        {
          id: 3,
          name: '...',
          path: '/assets/loading.png',
        },
        {
          id: 4,
          name: '...',
          path: '/assets/loading.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 6 : isMobile ? 8 : 10,
      deskPosition: isMobile ? [1.5, -4.5, -2.5] : [1.5, -4.5, -2.5],
      cubePosition: isSmall ? [4, -5.6, 0] : isMobile ? [6, -9, -9] : isTablet ? [5, -5, 0] : [12, -6, 0],
      reactLogoPosition: isSmall ? [5, 3, -5] : isMobile ? [6, 3.5, 0] : isTablet ? [5, 4, 0] : [11, 3, 2],
      ringPosition: isSmall ? [-11, 8, -20] : isMobile ? [-11, 8, -20] : isTablet ? [-25, 5, 3] : [-25, 5, 3],
      targetPosition: isSmall ? [-8, -12.5, -20] : isMobile ? [-8, -6.5, -5] : isTablet ? [-11, -7, -5] : [-20, -12, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];