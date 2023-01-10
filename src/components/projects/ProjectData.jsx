import Work1 from "../../assets/projects/SubstrackedThumb.png";
import Work2 from "../../assets/projects/RentARetroThumb.png";
import Work3 from "../../assets/projects/FitbookThumb.png";
import Work4 from "../../assets/projects/BarkerThumb.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Substracked - Subscription Management",
    category: "team",
    description: "Manage your online subscription services effectively and save money.",
    tools: "HTML/Sass, Stimulus/Javascript, Ruby on Rails, Devise, Pundit, APIs, Cloudinary",
    url: "http://www.substracked.com",
    gh: "https://github.com/a-vasse/substracked"
  },
  {
    id: 2,
    image: Work2,
    title: "Rent a Retro - Video Game Rentals/Loans",
    category: "team",
    description: "Rent and loan retro video games from a growing community of gamers.",
    tools: "HTML/Sass, Javascript, Ruby on Rails, Devise, Pundit, Cloudinary",
    url: "https://rent-a-retro.herokuapp.com/",
    gh: "https://github.com/a-vasse/Rent-a-retro"
  },
  {
    id: 3,
    image: Work4,
    title: "Barker - Online SNS Messaging",
    description: "Post messages and keep informed with post from other users",
    tools: "HTML/Sass, Ruby on Rails, Cloudinary",
    category: "individual",
    url: "https://barker-av.herokuapp.com",
    gh: "https://github.com/a-vasse/barker"
  },
  {
    id: 4,
    image: Work3,
    title: "Fitbook - Outfit Management",
    description: "Organise and manage your cloting outfits easily.",
    tools: "HTML/Sass, Ruby on Rails, Cloudinary",
    category: "individual",
    url: "https://fitbook-av.herokuapp.com",
    gh: "https://github.com/a-vasse/rails-fitbook"
  },
];

export const projectsNav = [
  {name: "all" },
  {name: "team" },
  {name: "individual" },
];
