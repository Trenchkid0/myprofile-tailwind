import React, { createElement, useState,useEffect } from 'react'

export default function Portofolio() {
   
    
    useEffect(() => {
        const apiKey = 'https://api.github.com/users/';
        const main =  document.getElementById('main');
        const form =  document.getElementById('form');
        const search =  document.getElementById('search');

        try {
            getUser('Trenchkid0');
    
            if (name) {
                getUser(name);
        
                search.value = "";
            }
    
    
        async function getUser(username) {
            const resp = await fetch(apiKey + username);
            const result = await resp.json();
        
            createUserCard(result);
            getRepos(username)
        }
        async function getRepos(username) {
            const resp = await fetch(apiKey + username + '/repos');
            const result = await resp.json();
            console.log(result);
        
            addRepos(result);
        }

    
        function createUserCard (user){
    
            const cardHTML  = `
            <div class="card">
              <div class="img-container">
                  <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
              </div>
              <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul class="info">
                  <li>${user.followers}<strong>Followers</strong></li>
                  <li>${user.following}<strong>Following</strong></li>
                  <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>

                <h4 class="titlerepos">Repos :</h4>
                <div class="repos" id="repos"></div>
              </div>
            </div>    

    `;
        
        
        
            main.innerHTML = cardHTML;
        }
        function addRepos(repos) {
            const reposEl = document.getElementById('repos');
            
            
            repos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 10)
                .forEach((repo) => {
                    const repoEl = document.createElement("a");
                    repoEl.classList.add("repo");
        
                    repoEl.href = repo.html_url;
                    repoEl.target = "_blank";
                    repoEl.innerText = repo.name;
        
                    reposEl.appendChild(repoEl);
                });
        }
        
        
        
      } catch (error) {
        
      }
    
     
    }, [])
    


  return (

    <section className='githubprofile'>
      
      <main className='main' id="main">

      </main>

    </section>
  )
}
