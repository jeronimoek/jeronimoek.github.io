const people = ['Jero','Senen','Manu','Miguel']



const now = new Date()
for(let i = 0; i < 20; i++){
    now.setDate(now.getDate() - now.getDay() + 1)
    const firstDay = `${now.getDate()}/${now.getMonth()+1}`
    now.setDate(now.getDate() + 6)
    const lastDay = `${now.getDate()}/${now.getMonth()+1}`
    const p = document.createElement('p')
    p.innerText= firstDay + ' - ' + lastDay
    p.style.margin = '0px'
    document.querySelector('#container').appendChild(p)

    const weekShift = Math.floor(now.getTime()/(86400 * 1000 * 7))%4

    const arr = people.slice(weekShift).concat(people.slice(0,weekShift))

    const s = document.createElement('p')
    s.innerText = `cocina: ${arr[0]}\nliving: ${arr[1]}\nbaño: ${arr[2]}\nreemplazo: ${arr[3]}`
    document.querySelector('#container').appendChild(s)
    s.style.margin = '0px'
    s.style.marginBottom = '20px'
    
    now.setDate(now.getDate() + 2)
}
