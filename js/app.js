console.log('Jqueryyy!!!')

const skills = {'0': []}

$("form").submit(function(e) {
    e.preventDefault();
});

const addSkill = () => {
    $('.submit').on('click', (e) => {
        const input = $('input[type = text]')
        skills[0].push(input.val())
        input.val("")
        localStorage.setItem('skills', JSON.stringify(skills))
        renderList(skills[0][skills[0].length - 1])
    })
}

const removeSkill = () => {
   $('.skills').on('click', 'button', function(e) {
       skills[0].splice(skills[0].indexOf($(this).attr('id')), 1)
       this.closest('.skill').remove()
       localStorage.setItem('skills', JSON.stringify(skills))

   })
}

const renderList = (skill) => {
    const template = 
    `
    <div class='skill'>
        <button class='remove-btn' id='${skill}'>X</button>
        <p>${skill}</p>
    </div>
    `
    $('.skills').append($(template))
}

addSkill()
removeSkill()

if(JSON.parse(localStorage.skills)[0]) {
    skills[0] = JSON.parse(localStorage.skills)[0]
    skills[0].forEach(skill => {
        renderList(skill)
    })
}