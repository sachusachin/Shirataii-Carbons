import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc  } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyBVCLyTUmjOk7PkCK5WNWfTMxo80NsygaU",
    authDomain: "shirataiicarbons.firebaseapp.com",
    projectId: "shirataiicarbons",
    storageBucket: "shirataiicarbons.appspot.com",
    messagingSenderId: "104296725421",
    appId: "1:104296725421:web:72509acd738337b01bff24",
    measurementId: "G-KF7LTXNSJM"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const dataArray = [];

  function updateTable() {
    const tableBody = document.getElementById("table-body");
    if(!tableBody) return
    tableBody.innerHTML = '';

    dataArray.forEach(function (data,i) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `<td>${i+1}</td><td>${data.name}</td><td>${data.email}</td><td>${data.message}</td><td>${data.date}</td><td class='delete-btn' data-id="${data.id}" style="display:none;">Delete</td>`;
      tableBody.appendChild(newRow);
    });
  }
  document.querySelector('#contact-form') && document.querySelector('#contact-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    addData()
})

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
      // Get the ID from the data-id attribute of the clicked button
      const id = event.target.getAttribute('data-id');
  
      // Call your deleteRow function with the ID
      deleteData(id.toString());
    }
  });

function formatDateToCustomFormat(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = date.getMonth();
    const formattedDate = `${months[monthIndex]} ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate;
  }
  async function addData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const date = formatDateToCustomFormat(new Date(Date.now()));

    // Validation can be added here

    const newData = {
      id: Date.now().toString(), // Using timestamp as a unique ID
      name: name,
      email: email,
      message: message,
      date: date
    };

    try {
      // Add data to Firestore
      await addDoc(collection(db, "user-messages"), newData);

      dataArray.push(newData);
      updateTable();

      // Display success message
      Swal.fire({
        title: "Good job!",
        text: "Thanks for your Intrest",
        icon: "success"
      });
      document.getElementById("name").value='';
      document.getElementById("email").value='';
      document.getElementById("message").value='';
    } catch (error) {
      console.error("Error adding data:", error);

      // Display error message
      alert("Please try again.");
    }
  }

 async function deleteData(id) {
    try {
      // Delete data from Firestore
      await deleteDoc(doc(db, "user-messages"), id);

      dataArray = dataArray.filter(item => item.id !== id);
      updateTable();

      // Display success message
      alert("Data deleted successfully!");
    } catch (error) {
      console.error("Error deleting data:", error);

      // Display error message
      alert("Error deleting data. Please try again.");
    }
  }

  // Retrieve data from Firestore on page load
  async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "user-messages"));
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    updateTable();
  }

  // Call this function on page load to fetch data from Firestore
  fetchDataFromFirestore();