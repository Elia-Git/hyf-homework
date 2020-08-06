// When you have the data for the different repositories, render the fullname of the repo, url of the repo, and the owner of the repo. See github-repos as an example of how the renderered repos should look. You are more than welcome to style it a bit nicer!
//github url

const userUrl = "https://api.github.com/search/repositories?q=user:";

const body = document.querySelector("body");

//Fetching data
const fetchAll = (userName) =>
    fetch(userUrl + userName)
    .then((response) => response.json())
    .then((data) => data.items);

const usersPromises = [
    fetchAll("anilMula"),
    fetchAll("merihnguse"),
    fetchAll("Deepti-Dk"),
    fetchAll("benna100"),
    fetchAll("nuha90")
];

//Rendering part
const renderingOfRepos = (repoes) => {
    const ul = document.createElement("ul");
    body.appendChild(ul);
    const li = document.createElement("li");
    // Repo owner and number of repos
    li.innerHTML = `${repoes[0].owner.login}'s repositories (${repoes.length})`;
    ul.appendChild(li);
    repoes.forEach((repo) => {
        const ul = document.createElement("ul");
        // Repo name and corresponding url's
        ul.innerHTML = `
            <li> ${repo.name} : ${repo.url}`;
        li.appendChild(ul);
    });
};
Promise.all(usersPromises).then((results) => {
    results.forEach((result) => renderingOfRepos(result));
});