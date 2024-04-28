const ModalBtn = document.querySelector('.modalbtn')
const Backdrop = document.querySelector('.backdrop')
const Modal = document.querySelector('.modal')
const tableDOM = document.querySelector('.table-body')

ModalBtn.addEventListener('click', closebackdrop)

let alldata = []

// function closebackdrop() {

//   Modal.style.display = "none";
//   Backdrop.style.display = "none";
//   document.querySelector(".main").style.display = "block";
//   document.querySelector(".nav").style.display = "block"

// }

function closebackdrop () {
  axios
    .get('http://localhost:3000/transactions')
    .then(res => {
      alldata = res.data
      creattable(alldata)
      Modal.style.display = 'none'
      Backdrop.style.display = 'none'
      document.querySelector('.main').style.display = 'block'
      document.querySelector('.nav').style.display = 'block'
    })
    .catch(err => console.log(err))
}

function creattable (alldata) {
  let result = ''
  alldata.forEach(element => {
    result += `
    <tr>
    <td>${element.id}</td>
    <td>${element.type} </td>
    <td>${element.price}</td>
    <td>${element.refId}</td>
    <td>${new Date(element.date).toLocaleDateString('fa-IR')}</td>
    </tr>`
  })
  tableDOM.innerHTML = result
  console.log(tableDOM)
}
