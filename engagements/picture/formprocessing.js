        document.getElementById('myForm').addEventListener('submit', function(event){
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const password = document.getElementById('password').value;
            const age = document.getElementById('age').value;
            const birthDate = document.getElementById('birthDate').value;

            if(!firstName) {
                alert('First Name cannot be blank.');
                return;
            }

            if(!lastName) {
                alert('Last Name cannot be blank.');
                return;
            }

            if(!password) {
                alert('Password cannot be blank.');
                return;
            }
            if(!age || age < 18) {
                alert('You must be 18 years or older to submit this form.');
                return;
            }

            const formData = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                age: age,
                remember: document.getElementById('remember').checked,
                class: document.querySelector('input[name="class"]:checked')?.value,
                state: document.getElementById('state').value,
                birthDate: birthDate,
            };

        console.log(formData);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function (){
            if (xhr.readyState ===4 && xhr.status === 200) {
                const message = document.getElementById('message');
                const response = JSON.parse(xhr.responseText);
                message.textContent = response.message;
                document.getElementById('myForm').reset();
                alert(`Success: ${firstName} ${lastName}`);
            } else if (xhr.readyState === 4) {
                alert('Error submitting form.');
            }
        }
        xhr.send();
        });