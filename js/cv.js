document.getElementById('menuIcon').addEventListener('click', () => {

    document.getElementById('navMobile').classList.toggle('menu-hidden');

});

const getInfo = async () => {

    const request = new Request('../json/cv.json');
    const response = await fetch(request);
    const cvObj = await response.json();

    return cvObj;
}

const populateCv = (cvObj) => {

    let employmentHtml = ``;

    cvObj.employment.forEach(element => {

        const listItem = `
        <li>
            <h4>${element.heading}</h4>
            <p>
                <span class="job-title">${element.jobTitle}</span>
                <span class="bold-text">${element.location}</span><br>
                ${element.text}
            </p>
        </li>`;

        employmentHtml += listItem;

    });

    document.getElementById('employmentList').innerHTML = employmentHtml;

    let educationHtml = ``;

    cvObj.education.forEach(element => {

        const listItem = `<li>${element}</li>`;
        educationHtml += listItem;
    });

    document.getElementById('educationList').innerHTML = educationHtml;

    let internshipsHtml = ``;

    cvObj.internships.forEach(element => {
        let listItem = `
        <li>${element.text}</li>`;
        listItem = listItem.replace('#companyName#', `<span class="bold-text">${element.companyName}</span>`);
        internshipsHtml += listItem;
    });

    document.getElementById('internshipsList').innerHTML = internshipsHtml;
}

const cvObj = await getInfo();
populateCv(cvObj);


