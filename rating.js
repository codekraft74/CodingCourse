const ratingContainer = document.getElementById("ratingContainer");
const responseMessage = document.getElementById("responseMessage");

ratingContainer.addEventListener("change", function () {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        responseMessage.innerText = `You selected ${selectedRating.value}-star rating.`;
    }
});