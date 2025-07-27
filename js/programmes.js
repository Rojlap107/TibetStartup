// Programme data
const programmes = {
    'tedsp': {
        id: 'tedsp',
        title: 'Tibetan Enterprise Digitization Support Program (TEDSP)',
        shortTitle: 'TEDSP',
        image: 'img/TibetStartup! Banner.jpg',
        date: 'Thursday, May 15, 2025, 10:30 PM – Wednesday, December 31, 2025, 11:30 PM',
        shortDate: 'Thu, May 15, 2025, 10:30 PM – Wed, Dec 31, 2025, 11:30 PM',
        description: 'It all begins with an idea - maybe you want to launch a business, turn a hobby into something more, or share a creative project with the world. Whatever it is, the way you tell your story online can make all the difference.',
        detailedDescription: 'The Tibetan Enterprise Digitization Support Program (TEDSP) provides a comprehensive pathway for Tibetan businesses to transition to the digital realm. The program focuses on foundational support, including legal registrations (e.g., income tax and GST compliance), creating an online presence through websites and social media, and developing a marketing plan. Businesses will also receive guidance on promoting their products, generating sales, and utilizing digital marketing tools effectively.',
        highlight: '',
        services: [
            'Legal Registration',
            'Payment Gateway Setup',
            'Branding & Rebranding',
            'Social Media Marketing',
            'Website Development',
            'Digital Marketing Strategy',
            'E-commerce Integration',
            'Business Analytics Setup',
            'Ongoing Support & Mentorship',
            'Performance Tracking & Optimization'
        ],
        duration: '8 months comprehensive support',
        period: 'May 2025 - December 2025',
        registrationTitle: 'Limited Spots Available',
        registrationDescription: 'We\'re offering FREE services to the first 10 qualifying businesses. Don\'t miss this opportunity to digitize your enterprise.',
        registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSegHcmb8F0Ah96lG4r9RHr12IyVyuCaEJXB9xwiCi80kexDAA/viewform?usp=dialog'
    }
    // Future events can be added here following the same structure
};

// Function to get programme data by ID
function getProgramme(id) {
    return programmes[id] || null;
}

// Function to get all programmes
function getAllProgrammes() {
    return Object.values(programmes);
}

// Function to load programme detail page
function loadProgrammeDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const programmeId = urlParams.get('id');
    
    if (!programmeId) {
        // Redirect to programmes page if no ID provided
        window.location.href = 'programmes.html';
        return;
    }
    
    const programme = getProgramme(programmeId);
    
    if (!programme) {
        // Redirect to programmes page if invalid ID
        window.location.href = 'programmes.html';
        return;
    }
    
    // Update page title
    document.title = `${programme.shortTitle} - TibetStartup!`;
    
    // Update programme image
    const programmeImage = document.querySelector('.programme-image');
    if (programmeImage) {
        programmeImage.style.backgroundImage = `url('${programme.image}')`;
    }
    
    // Update programme title
    const titleElement = document.querySelector('.programme-detail-title');
    if (titleElement) {
        titleElement.textContent = programme.title;
    }
    
    // Update programme date
    const dateElement = document.querySelector('.programme-detail-date');
    if (dateElement) {
        dateElement.textContent = programme.date;
    }
    
    // Update programme description
    const descriptionElement = document.querySelector('.programme-detail-description');
    if (descriptionElement) {
        descriptionElement.textContent = programme.description;
    }
    
    // Update detailed description
    const detailedDescTitle = document.querySelector('.programme-details h3');
    const detailedDescText = document.querySelector('.programme-details p');
    if (detailedDescTitle && detailedDescText) {
        detailedDescTitle.textContent = programme.detailedDescription;
        detailedDescText.innerHTML = programme.highlight;
    }
    
    // Update services list
    const servicesList = document.querySelector('.services-list ul');
    if (servicesList && programme.services) {
        servicesList.innerHTML = programme.services.map(service => `<li>${service}</li>`).join('');
    }
    
    // Update registration button
    const regBtn = document.querySelector('.register-btn');
    if (regBtn) regBtn.href = programme.registrationLink;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { programmes, getProgramme, getAllProgrammes, loadProgrammeDetail };
}