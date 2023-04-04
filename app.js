
        const hadnleGetRepos = async()=>{

          let html = ""

          let res = await fetch("https://api.github.com/users/Muhammad-Bilal-code/repos")
          .then((res)=>{
            // console.log(res)
            return res.json()
          }).then((val)=>{
            console.log(val.length)

                  val.forEach(element => {
                    console.log(element)
                    console.log((element.name))
                    console.log((element.html_url))
                     html += ` <div class="card-container">
                       <h2 id="repo-name">${element.name}</h2>
                       <a href=${element.html_url} target= "_blank">Go to Repo</a>
                    </div>`
                  });
                })
                document.getElementsByClassName("all-repos")[0].innerHTML = html
        }
       hadnleGetRepos()
      