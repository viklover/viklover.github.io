
let tags = document.querySelectorAll('.tag');
let selectedTags = [];

let addListenerToTag = function (tag) {
    tag.addEventListener('click', function () {
        if (selectedTags.indexOf(tag.dataset.value) === -1) {
            selectedTags.push(tag.dataset.value);
            tag.classList.add('selected');
        } else {
            selectedTags.splice(selectedTags.indexOf(tag.dataset.value), 1);
            tag.classList.remove('selected');
        }
        updateProjectList();
        console.log(selectedTags);
    });
};

for (let i = 0; i < tags.length; ++i) {
    if (tags[i].classList.contains('selected')) {
        selectedTags.push(tags[i].dataset.value);
    }
    addListenerToTag(tags[i]);
}