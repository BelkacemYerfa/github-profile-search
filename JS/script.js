//JS code 

const GithubUserApi = 'https://api.github.com/users/' ;
const Input = document.getElementById('UsernameInput') ; 
const btn = document.querySelector('[data-search-btn]') ; 
const locationD = document.querySelector('.info-location');
const website = document.querySelector('.info-website')
const twitter = document.querySelector('.info-twitter')
const companyD = document.querySelector('.info-company')
const ImageAvatar = document.getElementById('UserAvatar')
const Name = document.getElementById('name')
const Name2 = document.getElementById('name2')
const bioD = document.getElementById('bio')
const date = document.getElementById('getDate');
const Month = document.getElementById('getMonth');
const Year = document.getElementById('getYear');
const Months = [
 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' , 'Jul', 'Aug', 'Sep', 'Oct', 'Nov' , 'Dec'
] ; 

const Dash = [
  Repos = document.getElementsByClassName('Public')[0] , 
  Followers = document.getElementsByClassName('Public')[1] , 
  Following = document.getElementsByClassName('Public')[2]
]

const body = document.body ; 
const BgBtn = document.querySelector('[data-btn-background]') ; 
const ImageMode1 = document.getElementsByClassName('Dark')[0];
const ImageMode2 = document.getElementsByClassName('Light')[0];



BgBtn.addEventListener('click' , ()=>{
  body.style.backgroundColor == 'white' ? body.style.backgroundColor = 'hsl(217, 21%, 21%)' : body.style.backgroundColor = 'white' ; 
  if(ImageMode1.style.display == 'block'){
    ImageMode1.style.display = 'none'
    ImageMode2.style.display = 'block'
  }
  else{
     ImageMode1.style.display = 'block' ; 
     ImageMode2.style.display = 'none' ;
  }
})

btn.addEventListener('click' , ()=>{
 if(Input.value !== ''){
  //async method 
   const getUserData = async () =>  {
    try{
    const url = GithubUserApi+Input.value ; 
    const response = await fetch(url);
    const data = await response.json();
    console.log(data) ; 
   //Top Information 
   data.avatar_url === null ? alert('Error : No image found') : ImageAvatar.src = data.avatar_url ; 
   data.company === null || data.company === '' ? Name.innerText = 'null' : Name.innerText = data.company
   data.login === null || data.login === '' ? Name2.innerText = 'null' : Name2.innerText ='@'+data.login
   data.bio === null || data.bio === '' ? bioD.innerText = 'This profile has no bio ' : bioD.innerText = data.bio
    //you don't need to check if created date is empty ; 
    Year.innerText = data.created_at.slice(0,4);
    //essentially this is the index of the month
    Month.innerText = Months[data.created_at.slice(6,7)] ; 
    date.innerText = data.created_at.slice(8,10)
    //the dash info is not possible to be empty so we don't need to check if it is empty ; 
    Dash[0].innerText = data.public_repos ; 
    Dash[1].innerText = data.followers ;
    Dash[2].innerText = data.following ; 
    //ternary expression 
     data.location === '' || data.location === null ? locationD.innerText = 'not available' : locationD.innerText = data.location ; 
     data.blog === '' || data.blog === null ? website.innerText = 'not available' : website.innerText = data.blog ; 
     data.twitter_username === '' || data.twitter_username === null ? location.innerText = 'not available' : location.innerText = data.twitter_username ; 
     data.company === '' || data.company === null ? companyD.innerText = 'not available' : companyD.innerText = data.company ;   
  }
  catch {
    alert('broking api')
   }
}
  getUserData();
 }
 else{
  alert('Please provide a username')
 }

})
