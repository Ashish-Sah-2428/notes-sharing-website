document.getElementById("upload-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("note-title").value;
    const fileInput = document.getElementById("note-file");
    const file = fileInput.files[0];

    if (file && file.type === "application/pdf") {
        const fileURL = URL.createObjectURL(file);

        // Add the note to the notes list
        const notesList = document.getElementById("notes-list");
        const noteItem = document.createElement("li");

        const noteLink = document.createElement("a");
        noteLink.href = fileURL;
        noteLink.textContent = title;
        noteLink.target = "_blank";

        noteItem.appendChild(noteLink);
        notesList.appendChild(noteItem);

        // Clear the form
        document.getElementById("upload-form").reset();
        alert("Note uploaded successfully!");
    } else {
        alert("Please upload a valid PDF file.");
    }
});