let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
  usersWord = element.value

  console.log(usersWord)
}

function handleSubmit() {
  let newListItem = document.createElement('LI')
  newListItem.innerText = usersWord

  if (usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem)
  } else {
    oddList.appendChild(newListItem)
  }

  resetForm()
}

const resetForm = () => {
  usersWord = ""
  document.getElementById("even-odd-form").reset()
}

// document.getElementById('even-odd-form').addEventListener('submit', function(e) {
//   handleSubmit()
//   e.preventDefault();
// }, false);

const preventReload = (e) => {
  e.preventDefault()
} 