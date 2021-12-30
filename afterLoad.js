import { MY_SKILLS, MY_PROJECTS } from "./data.js";
import MakeCarousel from "./CarrosselMaker.js"
import MakeCards from './ProjectsCardMaker.js'

window.onload = () => {
  MakeCarousel(MY_SKILLS);
  MakeCards(MY_PROJECTS);
}
