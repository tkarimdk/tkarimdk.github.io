export type Project = {
  cover?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  name: string;
  repo: string;
  slug?: string;
  owner?: string;
  category: string;
  description: string;
  tags: string[];
  visual: string;
  label: string;
  course: string;
  featured: boolean;
  status?: "Completed" | "Ongoing thesis" | "Learning in progress";
};

export const projects: Project[] = [
  {
    name: "Road Deterioration Prediction",
    slug: "road-deterioration-prediction",
    repo: "",
    category: "Machine learning",
    description:
      "My ongoing undergraduate thesis on road deterioration prediction, exploring environmental and infrastructure-related data. Methods and findings will be shared as the research develops.",
    tags: ["Machine learning"],
    visual: "road",
    cover: {
      src: "/projects/road-deterioration.webp",
      width: 1672,
      height: 941,
      alt: "Road Deterioration Prediction cover with damaged pavement and illustrative condition chart and map.",
      caption:
        "Concept artwork; the chart and map are illustrative, not thesis results.",
    },
    label: "ROAD DETERIORATION / ONGOING THESIS",
    course: "Undergraduate thesis",
    status: "Ongoing thesis",
    featured: true,
  },
  {
    name: "Music Context Understanding",
    repo: "CSE425-GNN-BERT-Music-Context",
    category: "Machine learning",
    description:
      "Connecting what music sounds like with what it means. Relation-aware audio graphs meet DistilBERT, with leakage-controlled evaluation.",
    tags: ["Python", "PyTorch", "GNN", "DistilBERT"],
    visual: "audio",
    cover: {
      src: "/projects/gnn-bert.webp",
      width: 1672,
      height: 941,
      alt: "GNN-BERT Music Context cover with headphones, an audio waveform and a connected graph.",
      caption: "Project cover artwork supplied by Tanzimul Karim.",
    },
    label: "AUDIO Ã— LANGUAGE",
    course: "CSE425",
    status: "Completed",
    featured: true,
  },
  {
    name: "Global River Database (GRD)",
    repo: "Global-River-Database",
    owner: "Danial-Dirar",
    category: "Web applications",
    description:
      "Contributed to a collaborative river database with a Next.js frontend and NestJS backend, organizing river records alongside geographical, environmental, and financial information.",
    tags: ["Next.js", "NestJS", "MySQL", "TypeORM"],
    visual: "river",
    cover: {
      src: "/projects/global-river-database.jpg",
      width: 1600,
      height: 900,
      alt: "Global River Database cover with river data branding and a dashboard interface illustration.",
      caption: "Project presentation artwork supplied by Tanzimul Karim.",
    },
    label: "GLOBAL RIVER DATABASE",
    course: "Contributor",
    featured: true,
  },
  {
    name: "LiveGPS",
    repo: "LiveGPS",
    category: "Web applications",
    description:
      "A live view of movement. Realtime location broadcasting, simulated routes around Dhaka, and a shared map powered by Firestore.",
    tags: ["React", "Firebase", "Leaflet"],
    visual: "map",
    cover: {
      src: "/projects/livegps.webp",
      width: 1600,
      height: 900,
      alt: "LiveGPS cover illustrating a Dhaka map, location markers and realtime tracker panel.",
      caption: "Project cover artwork supplied by Tanzimul Karim.",
    },
    label: "REALTIME LOCATION",
    course: "Personal project",
    featured: true,
  },
  {
    name: "NumPyNet",
    repo: "NumPyNet",
    category: "Machine learning",
    description:
      "An ongoing learning project building neural networks from scratch with Python and NumPy. Exploring manual backpropagation, numerical gradient checks, and training behavior through XOR and synthetic multiclass experiments.",
    tags: ["Python", "NumPy", "Neural networks"],
    visual: "numpynet",
    cover: {
      src: "/projects/numpynet.png",
      width: 1600,
      height: 900,
      alt: "NumPyNet cover: neural networks from scratch, with a connected network diagram and Python, NumPy, and learning labels.",
      caption: "Project cover artwork supplied by Tanzimul Karim.",
    },
    label: "NEURAL NETWORKS FROM SCRATCH",
    course: "Personal project",
    status: "Learning in progress",
    featured: false,
  },
  {
    name: "Demon Arena",
    repo: "CSE423_Computer.Graphics_Project",
    category: "Computer graphics",
    description:
      "A 3D survival shooter built from OpenGL primitives. Multiple weapons, camera modes, collision detection, and a world full of demons.",
    tags: ["Python", "PyOpenGL", "GLUT"],
    visual: "arena",
    cover: {
      src: "/projects/demon-arena.webp",
      width: 1672,
      height: 941,
      alt: "Demon Arena cover showing the OpenGL game environment, weapons and camera views.",
      caption: "Project cover artwork supplied by Tanzimul Karim.",
    },
    label: "3D SURVIVAL SHOOTER",
    course: "CSE423",
    featured: true,
  },
  {
    name: "Parking Management System",
    repo: "CSE341-Project-Parking-Management-System",
    category: "Systems",
    description:
      "Back to the fundamentals: a 16-bit x86 Assembly system for authentication, vehicle tracking, billing, and parking records.",
    tags: ["Assembly", "x86", "16-bit"],
    visual: "parking",
    cover: {
      src: "/projects/parking-management.webp",
      width: 1672,
      height: 941,
      alt: "Parking Management System cover showing an illustrated 8086 terminal and parking records.",
      caption: "Project cover artwork supplied by Tanzimul Karim.",
    },
    label: "LOW-LEVEL SYSTEMS",
    course: "CSE341",
    featured: true,
  },
  {
    name: "OpenGL Lab Explorations",
    repo: "CSE423-OpenGL-Lab-Assignments",
    category: "Computer graphics",
    description:
      "A collection of computer graphics lab assignments, exploring Python and OpenGL through hands-on implementation.",
    tags: ["Python", "OpenGL"],
    visual: "grid",
    cover: {
      src: "/projects/opengl-labs.webp",
      width: 1672,
      height: 941,
      alt: "OpenGL Graphics Labs cover with wireframe geometry and an illustrative code editor.",
      caption: "Project cover artwork supplied by Tanzimul Karim.",
    },
    label: "GRAPHICS LAB",
    course: "CSE423",
    featured: false,
  },

];

export const projectSlug = (project: Project) =>
  project.slug ?? project.repo.toLowerCase().replace(/_/g, "-");
export const sourceUrl = (project: Project) =>
  project.repo
    ? `https://github.com/${project.owner ?? "tkarimdk"}/${project.repo}`
    : null;
export const roadSections = [
  "Research problem & motivation",
  "Dataset overview",
  "Data preprocessing",
  "Feature engineering",
  "Modeling pipeline",
  "Model evaluation",
  "Visualizations",
  "Limitations",
  "Future improvements",
];
export const architecture: Record<string, { stages: string[]; note: string }> =
  {
    road: {
      stages: [
        "Environmental context",
        "Infrastructure data",
        "Prediction research",
      ],
      note: "Ongoing undergraduate thesis. Dataset provenance, preprocessing, selected features, models, validation and results have not been supplied. This diagram describes the subject, not a verified implementation pipeline.",
    },
    audio: {
      stages: [
        "Audio representations",
        "Relation-aware graph network",
        "DistilBERT language representations",
        "Comparative evaluation",
      ],
      note: "Conceptual overview of the documented research components; not an exact training graph. Dataset, hyperparameters, metrics and implementation decisions should be read in the linked source report.",
    },
    river: {
      stages: [
        "Next.js interface",
        "NestJS API",
        "TypeORM data layer",
        "MySQL river records",
      ],
      note: "The repository stack connects a web interface to structured river data. Role: Contributor. Specific implementation ownership has not been supplied.",
    },
    map: {
      stages: [
        "Location broadcast / simulated movement",
        "Firestore realtime data",
        "React interface",
        "Leaflet map",
      ],
      note: "Conceptual flow of the documented location features. Operational guarantees and deployment measurements have not been provided.",
    },
    parking: {
      stages: ["Authentication", "Vehicle records", "Parking logic", "Billing"],
      note: "Functional organization of the 16-bit x86 Assembly project. This is an explanatory overview, not a measured runtime trace.",
    },
    numpynet: {
      stages: [
        "Synthetic XOR / spiral data",
        "Dense layers & activations",
        "Manual backpropagation & SGD",
        "Gradient checks & training diagnostics",
      ],
      note: "An educational NumPy implementation with explicit gradients, numerical gradient verification, and experiments comparing learning rates and training-stability techniques. XOR uses four training samples; the multiclass example uses synthetic spiral data with a separate validation set. These experiments support learning and do not establish real-world performance.",
    },
    arena: {
      stages: [
        "Player input",
        "Game & collision logic",
        "Camera modes",
        "OpenGL rendering",
      ],
      note: "Conceptual organization of the documented survival-shooter features. Exact subsystem boundaries should be verified in source.",
    },
    grid: {
      stages: ["Python exercises", "OpenGL primitives", "Rendered scenes"],
      note: "A collection of coursework exercises rather than a single production application.",
    },
  };

