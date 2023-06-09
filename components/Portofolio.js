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
            <div class="flex p-3 max-w-xl ">
                <div class="img-container">
                    <img class="border-black border-solid ring-8 ring-black rounded-full " src="${user.avatar_url}" alt="${user.name}" />
                </div>
                <div class="ml-10">
                        <h2 class="mt-0 mb-4 text-xl font-bold dark:text-white">${user.name}</h2>
                        <p  class="mb-4 dark:text-white">${user.bio}</p>
        
                        <ul class="flex space-between space-x-8 w-60">
                            <li class="flex align-middle dark:text-white">${user.followers}<strong class="ml-2">Followers</strong></li>
                            <li class="flex align-middle dark:text-white">${user.following}<strong class="ml-2">Following</strong></li>
                            <li class="flex align-middle dark:text-white">${user.public_repos}<strong class="ml-2">Repos</strong></li>
                        </ul>
        
                        <h4 class="mt-10 dark:text-white">Repos :</h4>
                        <div class="" id="repos"></div>
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

    <section className='flex align-middle justify-center mt-52 h-96'>
        <h1 className='absolute -mt-44 font-bold text-xl dark:text-white'>This is my Github</h1>
        <p className='absolute -mt-32 font-bold text-xl dark:text-white'>Click Repo for views</p>
        <form id="form">
           
        </form>
        <main id='main'>

        </main>

    </section>
  )
}
