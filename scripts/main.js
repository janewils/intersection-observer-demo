/*
    I might want to have a threshold for when 
    the class is toggled. What counts as an intersection? 

    An intersection is whenever a given percentage 
    of an element is visible within the viewport. 

    How much should be showing, to trigger 
    an intersection (detection)?

    Threshold: 25% or 0.25
*/

/*
    In what context is the observer observing?

    It is observing the root node.
*/

let options = {
    root: null,
    threshold: 0.25,
}

/*
    How are we going to handle intersection changes?

    1) When something starts to intersect (come into view)
    2) When something stops intersecting (leave view)
*/

function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}

let observer = new IntersectionObserver(intersectionHandler, options);

/*
    We need to get reference to all of our images?
*/

let images = document.querySelectorAll("img");

/*
    Loop through al images, and tell the observer 
    to observe each one
*/


// ugly way
// for (let i = 0; i < images.length; i++) {

// }

images.forEach((image) => {
    observer.observe(image);
});