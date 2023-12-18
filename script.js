const buttons = document.querySelectorAll('.button') // node of class button
const body = document.querySelector('body')
const anchor = document.querySelectorAll('a')
console.log(anchor);

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    // console.log(e)
    // console.log(e.target) ->>> returns the target of the click
    if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue'
      anchor.forEach(function(anch){
        anch.style.backgroundColor = 'white'
        anch.style.color = 'black'
      })
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = 'white'
      anchor.forEach(function(anch){
        anch.style.backgroundColor = 'black'
        anch.style.color = 'white'
      })
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow'
      anchor.forEach(function(anch){
        anch.style.backgroundColor = 'red'
        anch.style.color = 'yellow'
      })
    }
    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
      anchor.forEach(function(anch){
        anch.style.backgroundColor = 'indigo'
        anch.style.color = 'grey'
      })
    }
  })
})
