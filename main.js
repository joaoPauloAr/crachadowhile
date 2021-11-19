const linksSocialMedia = {
  github: 'joaoPauloAr',
  instagram: 'joao.paulo.a',
  youtube: 'joao.pauloo.336',
  facebook: 'JoaoPauloAF13',
  twitter: 'UCg8ofXd74AK3kL2eE_RDfcg'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
