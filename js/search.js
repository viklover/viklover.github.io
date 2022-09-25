
let searchInput = document.querySelector('#searchProject');

function checkProjectTags(projectDOM, tags) {
    for (let tag of tags) {
        if (!projectDOM.classList.contains(tag))
            return false;
    }
    return true;
}

function containsProjectName(project, value) {
    let name = project.querySelector('.name').innerHTML;
    return name.includes(value);
}

function updateProjectList() {
    const query = searchInput.value;
    const current_tags = selectedTags.slice();

    for (let project of document.querySelectorAll('.project')) {
        if (checkProjectTags(project, current_tags) && containsProjectName(project, query)) {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    }
}

searchInput.oninput = updateProjectList;