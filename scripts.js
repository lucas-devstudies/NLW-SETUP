const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)


function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists){
        alert("Dia já incluso")
        return
    }

    alert(dayExists)
    nlwSetup.addDay(today)
}


function save(){
    localStorage.setItem('NLWSetup@Lucasferreirahabits', JSON.stringify(nlwSetup.data))
    console.log(nlwSetup.data)
}

const data = JSON.parse(localStorage.getItem('NLWSetup@Lucasferreirahabits')) || {}
nlwSetup.setData(data)
nlwSetup.load()


//const data ={
//    cafe: ["01-23","01-24", "01-25"]
//}