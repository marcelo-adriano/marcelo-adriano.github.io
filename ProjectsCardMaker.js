const PROJECTS_CONTAINER_ID = 'projects-card-container';
const projectsContainer = document.getElementById(PROJECTS_CONTAINER_ID);

function MakeCards(ProjectArray) {
  ProjectArray.forEach((project) => {
    const { name, description, image, link, github } = project;
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    const projectTitle = document.createElement('h3');
    projectTitle.innerText = name;
    projectCard.appendChild(projectTitle);
    
    const projectImage = document.createElement('img');
    projectImage.className = 'project-image'
    projectImage.src = image;
    projectCard.appendChild(projectImage);
    
    const projectDescription = document.createElement('p');
    projectDescription.innerText = description;
    projectCard.appendChild(projectDescription);
    
    const divLinks = document.createElement('div');
    divLinks.className = 'project-links';

    const projectLink = document.createElement('a');
    projectLink.innerText = "Página";
    projectLink.href = link;
    divLinks.appendChild(projectLink);
    
    const projectRepositorio = document.createElement('a');
    projectRepositorio.innerText = "Repositório";
    projectRepositorio.href = github;
    divLinks.appendChild(projectRepositorio);

    projectCard.appendChild(divLinks);
    
    projectsContainer.appendChild(projectCard);
  });
}

export default MakeCards;
