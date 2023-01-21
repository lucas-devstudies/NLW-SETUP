const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data ={
    cafe: ["01-23","01-24", "01-25"]
}
nlwSetup.setData(data)
nlwSetup.load()