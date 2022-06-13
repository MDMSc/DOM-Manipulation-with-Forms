let fetch = function () {
    let isSuccess = true;
    let fname = document.getElementById('first-name');
    let lname = document.getElementById('last-name');
    let letters = /^[a-zA-Z]+$/;
    if (!letters.test(fname.value)) {
        alert("Please enter letters only in First Name");
        isSuccess = false;
    }
    if (!letters.test(lname.value)) {
        alert("Please enter letters only in Last Name");
        isSuccess = false;
    }
    let address = document.getElementById('address');
    let pincode = document.getElementById('pincode');
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Please select gender');
        isSuccess = false;
    }
    let state = document.getElementById('state');
    let country = document.getElementById('country');
    let checks = document.getElementsByClassName('checks');
    let checkedContent = "";

    function ischecked() {
        let count = 0;
        for (let i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                checkedContent += `${checks[i].value} `;
                count++;
            }
        }
        if (count < 2) {
            alert("Please enter atleast 2 choices of food");
            isSuccess = false;
        }
        checkedContent = checkedContent.trimEnd();
    }

    ischecked();

    let data = [];
    if (isSuccess) {
        data = [fname.value, lname.value, address.value, pincode.value, gender.value, checkedContent, state.value, country.value];
        let tableBody = document.querySelector('#table-main tbody');
        let rows = tableBody.insertRow();
        let td;
        for (let i = 0; i < data.length; i++) {
            td = rows.insertCell();
            td.innerText = data[i];
        }

        fname.value = "";
        lname.value = "";
        address.value = "";
        pincode.value = "";
        gender.checked = false;
        state.value = "";
        country.value = "";
        for (let i = 0; i < checks.length; i++) {
            checks[i].checked = false;
        }
        checkedContent = "";
    }
}