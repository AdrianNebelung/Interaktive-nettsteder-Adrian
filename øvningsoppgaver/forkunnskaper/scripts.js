const courseContainer = document.getElementById("course-display");

if (courseContainer) {
courses.forEach(course => {
    const card = document.createElement("article");
    card.href = course.url;
    card.className = "course-card";
    card.style.direction = "none";


    card.innerHTML = `
        <h3>${course.tittel}</h3>
    
        <p>${course.beskrivelse}</p>
        <hr>
        <a href="${course.url}">${course.tittel}</p>
    `;

    courseContainer.appendChild(card);
});
}

const form = document.getElementById("signup-form");
const newsletterContent = document.getElementById("newsletter-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("user-name").value;
    const emailInput = document.getElementById("user-email").value;

    newsletterContent.innerHTML = `
    <p style="font-weight: bold;">
        Hei ${nameInput}. Takk for at du meldte e-posten ${emailInput} på vårt nyhetsbrev!
    </p>
    `;
});