// Wait for the page to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    backgroundChanger();
});

// Function to handle background image switching
function backgroundChanger() {
    // Get the background element
    const greeterElement = document.getElementById("greeter");
    
    // Get all the indicator dots
    const indicatorDots = document.querySelectorAll('.indicator');

    // List of background images
    const backgroundImages = [
        "Images/greeterBackground1.jpg",
        "Images/greeterBackground2.jpg",
        "Images/greeterBackground3.jpg",
        "Images/greeterBackground4.jpg",
        "Images/greeterBackground5.jpg"
    ];

    // Function to change the background image
    function changeBackground(imageIndex) {
        // Set the background image
        greeterElement.style.backgroundImage = "url(" + backgroundImages[imageIndex] + ")";
        
        // Remove the 'active' class from all indicator dots
        indicatorDots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        
        // Add the 'active' class to the current indicator dot
        indicatorDots[imageIndex].classList.add('active');
    }

    // Show the first image when the page loads
    changeBackground(0);

    // Add click event to each indicator dot
    indicatorDots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            changeBackground(index);
        });
    });
}
