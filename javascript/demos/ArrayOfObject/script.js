let courses = [
    { title: 'FrontEnd', instructor: 'Alice', duration: '4 weeks' },
    { title: 'BackEnd', instructor: 'Bob', duration: '6 weeks' },
    { title: 'FullStack', instructor: 'Charlie', duration: '8 weeks' }
];

function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = ''; // Clear the list

   
    courses.forEach((course,index) => {
        let li = document.createElement('li');
       li.innerHTML = `
            ${course.title} by ${course.instructor} - ${course.duration}
            <button onclick="editCourse(${index})">Edit</button>
            <button onclick="deleteCourse(${index})">Delete</button>
        `;
        courseList.appendChild(li);
    });
}

function editCourse(index) {
    const course = courses[index];  
     document.getElementById('courseName').value = course.title;
    document.getElementById('courseInstructor').value = course.instructor;
    document.getElementById('courseDuration').value = course.duration;
    document.getElementById('courseIndex').value = index; // Store index for updating
}


function addOrUpdateCourse() {
    const title = document.getElementById('courseName').value;
    const instructor = document.getElementById('courseInstructor').value;
    const duration = document.getElementById('courseDuration').value;
    const index = document.getElementById('courseIndex').value;

    if (title && instructor && duration) {
        if (index !== '') {
            // Update existing course
            courses[index] = { title, instructor, duration };
        } else {
            // Add new course
            courses.push({ title, instructor, duration });
        }
        displayCourses(); // Update the display
        // Clear input fields
        document.getElementById('courseName').value = '';
        document.getElementById('courseInstructor').value = '';
        document.getElementById('courseDuration').value = '';
        document.getElementById('courseIndex').value = ''; // Clear index field
    }
}




displayCourses()

function addCourse() {
   const title = document.getElementById('courseName').value;
    const instructor = document.getElementById('courseInstructor').value;
    const duration = document.getElementById('courseDuration').value;

    if (title && instructor && duration) {
        courses.push({ title, instructor, duration }); // Add the course object to the array
        displayCourses(); // Update the display
        // Clear input fields
        document.getElementById('courseName').value = '';
        document.getElementById('courseInstructor').value = '';
        document.getElementById('courseDuration').value = '';
    }
    else {
        alert('Please fill in all fields.');
    }   

}
