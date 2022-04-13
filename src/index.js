// PART 1
// request img's from server to display in ramenMenu

// 1. fetch the API
fetch('http://localhost:3000')
  .then(response => response.json())
  .then(data => displayHeaderImages(data));

// 2. write fn to display img's

function displayHeaderImages() {
    // check out how the API is structured.. see how to grab img's (not sure how to do this)
    GET http://localhost:3000/ramens


    //3. for each ramen, make a new img in ramenMenu (mapping?)
        // include info: restaurant, etc. 
        // so that it can be used for the click event in part 2

        function pushImages () {
            let apiPicture = 
            ramenMenu.append(apiPicture)
        }

}








// PART 2
// click img in ramenMenu and info is displayed in ramenDetail
// tasks:
    
// 1. grab all the p's in the ramenMenu by ID
    // I would add this ID to them automatically in part 1 as they are pulled from API
let littleTopRamens = document.getElementById('little-top-ramens')
// 2. give them 'click' userEvent to pull their info to be displayed
littleTopRamens.addUserEvent('click', (e) => {
    e.preventDefault()
    displaylittleRamens(e.target. 
    }
// don't know how to access their info (because I never got it in part1)




// declare useful elements we'll use in the fn below 
let ratingDisplay = document.getElementById('rating-display')
let commentDisplay = document.getElementById('comment-display')

// 3. write function to change ramenMenu info to info from littleTopRamens 
function displayLittleRamens(ID, ramenName, restaurant, image, rating, comment ) {
    let ramenDetail.name = ramenName;
    let ramenDetail.restaurant = restaurant;
    // not sure how to manipulate the image 
    let ratingDisplay["rating-display"] = rating;
    let commentDisplay['comment-display'] = comment;


}













// PART 3 (began here)


// 1. name important stuff

let ramenDetail = document.getElementById('ramen-detail')

let ramenMenu = document.getElementById('ramen-menu')

let newRamenForm = document.getElementById('new-ramen')
// 2. add submit event listener
newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // 3. get values from form and pass them to new fn
    submitNewRamen(e.target['new-name'].value,
        e.target['new-restaurant'].value,
        e.target['new-image'].value,
        e.target['new-rating'].value,
        e.target['new-comment'].value,
        )
})

// 4. write new fn that will take values and make new ramen(div?) in #ramen-menu(ramenMenu)
function submitNewRamen (newName, newRestaurant, newImageSource, newRating, newComment) {
    let newRamen = document.createElement('p')
    newRamen.newImageSource = newImageSource;
    
    // only the image will appear, how to store the data so when it's click it will appear in ramenDetail?
        // remember to "rating" and "comment" go into p's outside of ramenDetail scope 



    // 5. add it to the ramen menu
    
    ramenMenu.append(newRamen)

}