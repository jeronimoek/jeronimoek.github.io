const people = [
    {name: 'Hab. 4',color: 'red'},
    {name:'Hab. 2',color: 'green'},
    {name:'Hab. 3',color: 'blue'},
    {name:'Hab. 1',color: 'black'},]
const tasks = [
    'COCINA','LIVING','BAÑO','REEMPLAZO'
]


const now = new Date()
now.setDate(now.getDate() - 14)
for(let i = 0; i < 20; i++){
    now.setDate(now.getDate() - now.getDay() + 1)
    const firstDay = `${now.getDate()}/${now.getMonth()+1}`
    now.setDate(now.getDate() + 6)
    const lastDay = `${now.getDate()}/${now.getMonth()+1}`
    const p = document.createElement('p')
    if(i === 2){
        p.style.fontSize = '30px'
    }
    p.innerText= firstDay + ' - ' + lastDay
    p.style.margin = '0px'
    document.querySelector('#container').appendChild(p)

    const weekShift = Math.floor(now.getTime()/(86400 * 1000 * 7))%4

    const habs = people.slice(weekShift).concat(people.slice(0,weekShift))

    const s = document.createElement('p')
    habs.forEach((hab, i) => {
        const habElem = document.createElement('div')
        habElem.style.color = hab.color
        habElem.innerText = `${tasks[i]}: ${hab.name}`
        s.appendChild(habElem)
    })
    // s.innerText = `cocina: ${arr[0]}\nliving: ${arr[1]}\nbaño: ${arr[2]}\nreemplazo: ${arr[3]}`
    document.querySelector('#container').appendChild(s)
    s.style.margin = '0px'
    s.style.marginBottom = '20px'
    
    now.setDate(now.getDate() + 2)
}
