$(document).ready(function() {
    backgroundChanger();

    function backgroundChanger() {
        var greeter = document.getElementById("greeter");
        var indicators = document.querySelectorAll('.indicator');

        var images = [
            "Images/greeterBackground1.jpg",
            "Images/greeterBackground2.jpg",
            "Images/greeterBackground3.jpg",
            "Images/greeterBackground4.jpg",
            "Images/greeterBackground5.jpg"
        ];

        var currentImageIndex = 0;

        function changeBackground(index) {
            greeter.style.backgroundImage = "url(" + images[index] + ")";
            for (var i = 0; i < indicators.length; i++) {
                indicators[i].classList.remove('active');
            }
            indicators[index].classList.add('active');
            currentImageIndex = index;
        }

        changeBackground(0);

        for (var i = 0; i < indicators.length; i++) {
            indicators[i].addEventListener('click', function(index) {
                return function() {
                    changeBackground(index);
                };
            }(i));
        }
    }
});
