const technos = [
  { id: 1, name: 'Angular', details: 'Frontend' },
  { id: 2, name: 'Node', details: 'Backend' },
  { id: 3, name: 'React', details: 'Frontend' },
  { id: 4, name: 'Vue', details: 'Frontend' }
];

const mainDiv = document.getElementById('main');

function display(technos) {
  const technosList = technos.map(techno => {
    return `<div>${techno.id} ${techno.name} est une technologie ${techno.details}</div>`;
  });
  mainDiv.innerHTML = technosList.join('');
};

display(technos);