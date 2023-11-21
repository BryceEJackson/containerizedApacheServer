function toggleSection(header) {
    const section = header.parentElement;
    const content = section.querySelector(".content");

    if (section.clientHeight <= 40) {
        section.style.height = "10rem";
        content.textContent = "Section Opened";
    } else {
        section.style.height = "2rem";
        content.textContent = "Section Closed";
    }
}
