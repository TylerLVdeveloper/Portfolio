// Project Demo Videos
import PathFindingVisualizerMP4 from "./ProjectVideos/PathFindingVisualizer.mp4";
import SortingVisualizerMP4 from "./ProjectVideos/SortingVisualizer.mp4";
import CheckersMP4 from "./ProjectVideos/Checkers.mp4";
import SnakeMP4 from "./ProjectVideos/Snake.mp4";
import BankingAppDemoMP4 from "./ProjectVideos/BankingAppDemo.mp4";

// Project Screenshots
import PathFindingVisualizerIMG from "./ProjectImages/PathFindingVisualizer.jpeg";
import SortingVisualizerIMG from "./ProjectImages/SortingVisualizer.jpeg";
import CheckersIMG from "./ProjectImages/Checkers.jpeg";
import SnakeIMG from "./ProjectImages/Snake.jpeg";
import BankingAppIMG from "./ProjectImages/BankingApp.png";

const projectsArray = [
  {
    name: "Online Banking Web Application",
    image: BankingAppIMG,
    video: BankingAppDemoMP4,
    description:
      "This single-page React JS web application allows the user to view their account/transaction details, transfer funds between accounts, and send money to a contact.",
    githubLink: "https://github.com/TylerLVdeveloper/BankingReactApp",
    demoLink: `https://bankingwebapp-project.web.app/`,
    languages: "React JS | HTML | CSS",
  },
  {
    name: "PathFinding Visualizer",
    image: PathFindingVisualizerIMG,
    video: PathFindingVisualizerMP4,
    description: `Pathfinding visualizer that allows the user to select a start point, end point, and obstruction point(s), then finds the shortest path using the A* algorithm.`,
    githubLink: "https://github.com/TylerLVdeveloper/Pathfinder-Visualizer",
    demoLink: `https://pathfinding-visualizer-b8c68.web.app`,
    languages: "JavaScript | HTML | CSS",
  },
  {
    name: "Sorting Visualizer",
    image: SortingVisualizerIMG,
    video: SortingVisualizerMP4,
    description: `Along with sorting an array of values using the bubble sort algorithm, the user can select the size of the array, the speed at which it is sorted, and generate new random values.`,
    githubLink: "https://github.com/TylerLVdeveloper/Sorting-Visualizer",
    demoLink: `https://sorting-visualizer-99a6e.web.app`,
    languages: "JavaScript | HTML | CSS",
  },
  {
    name: "Checkers",
    image: CheckersIMG,
    video: CheckersMP4,
    description: `Classic Checkers board game designed for 2 player functionality, double-jump movement, "King Me" feature, intuitive user-interface for robust movement selection, and more!`,
    githubLink: "https://github.com/TylerLVdeveloper/game-checkers",
    demoLink: `https://checkers-javascript-project.web.app`,
    languages: "JavaScript | HTML | CSS",
  },
  {
    name: "Snake",
    image: SnakeIMG,
    video: SnakeMP4,
    description:
      "Dating back to its original design in 1976, the player controls vertical/horizontal movement while avoiding collisions with the outside border or the Snake itself. Each time a food dot is eaten, the Snake grows, increasing the difficulty.",
    githubLink: "https://github.com/TylerLVdeveloper/Game-Snake",
    demoLink: `https://snake-javascript-project.web.app`,
    languages: "JavaScript | HTML | CSS",
  },
];

export default projectsArray;
