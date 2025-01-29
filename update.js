    // Updates array containing messages and their corresponding URLs
    const updates = [
        { message: "New feature: Machine learning blogs!", url: "blog_page.html" },
        { message: "New feature:  C languge", url: "c.html" },
    ];

    // Function to display updates in the modal
    function showUpdates() {
        const updatesContainer = document.getElementById('updatesContainer');
        updates.forEach(update => {
            const updateElement = document.createElement('p');
            updateElement.innerHTML = `${update.message} <a href="${update.url}" class="blink" target="_blank">NEW</a>`;
            updatesContainer.appendChild(updateElement);
        });

        // Display the modal
        document.getElementById('updateModal').style.display = 'block';
    }

    // Close the modal when user clicks the close button
    document.getElementById('closeModal').onclick = function() {
        document.getElementById('updateModal').style.display = 'none';
    };

    // Close the modal if user clicks anywhere outside of the modal content
    window.onclick = function(event) {
        const modal = document.getElementById('updateModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Call the function when the page loads
    window.onload = showUpdates;

