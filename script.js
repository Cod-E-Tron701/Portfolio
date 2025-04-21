
// window.onload = function () {
//     const scrollDuration = 4000; 
//     const scrollHeight = document.body.scrollHeight;
//     let currentPosition = 0;
//     const step = scrollHeight / scrollDuration; 
//     const scrollSpeed = scrollDuration / (scrollHeight / step);

//     const scrollInterval = setInterval(function () {
//         currentPosition += step;
//         if (currentPosition >= scrollHeight) {
//             window.scrollTo(0, scrollHeight - 10);
//             clearInterval(scrollInterval);
//         } else {
//             window.scrollTo(0, currentPosition);
//         }
//     }, scrollSpeed);

    
//     setTimeout(() => {
//         document.body.style.overflow = "auto"; 
//     }, scrollDuration);
// };

//----------------------------------

function typeEffect(text) {
    let index = 0;
    const element = document.getElementById('type');
    element.innerHTML = "";

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type,50);
        }
    }
    type();
}
document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("type");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeEffect("Hey! If you wish to reach out to me, fill out the form. I'd love to collaborate on new exciting and challenging projects.");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.9 });
    observer.observe(targetElement);
});
//-----------------------------------
// ADDED under form
function validate()
    {
        event.preventDefault(); 
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        let flag=0;
        let n=/^[A-Za-z ]*$/;
        let e=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let p=/^\d{10}$/;
        if(n.test(name)==false)
        {
            alert("Please enter a valid name.");
            flag=1;
        }
        if(e.test(email)==false)
        {
            alert("Please enter a valid email address.");
            flag=1;
        }
        if(p.test(phone)==false)
        {
            alert("Please enter a valid phone number.");
            flag=1;
        }
        if(flag==0)
        {
            let successMessage = document.getElementById("success");
            successMessage.innerHTML = "Successfully sent!";
            successMessage.style.color = "lightgreen";
            
        }
    }
function expand(textarea)
{
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}


//-----------------------------------
// skills canvas
function canva(ele, per, no) {
    const canvas = document.getElementById(ele);
    const ctx = canvas.getContext("2d");

    const radius = canvas.width / 2;
    const startAngle = -Math.PI / 2;
    const lineWidth = 20; 
    let currentPercentage = 0;

    
    let progressColor;
    if (no == 1) {
        progressColor = 'rgba(8, 253, 8, 0.9)';
    } else if (no == 2) {
        progressColor = 'rgba(253, 8, 8, 0.9)';
    } else {
        progressColor = 'rgba(8, 237, 253, 0.9)';
    }

    function drawCircle(progress) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    
        ctx.beginPath();
        ctx.arc(radius, radius, radius - lineWidth, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(200, 200, 200, 0.2)';
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        const progressAngle = (Math.PI * 2) * (progress / 100);
        ctx.beginPath();
        ctx.arc(radius, radius, radius - lineWidth, startAngle, startAngle + progressAngle);
        ctx.strokeStyle = progressColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round"; // Smooth edges
        ctx.stroke();

        // Add the percentage text with a modern look
        ctx.fillStyle = 'rgb(0, 0, 0)'; // Text color
        ctx.font = 'bold 25px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${ele}`, radius, radius);
    }

    function animate() {
        if (currentPercentage < per) {
            currentPercentage += 1; // Adjust for smoother/slower animation
            drawCircle(currentPercentage);
            requestAnimationFrame(animate);
        } else {
            drawCircle(per); // Ensure final value is set
        }
    }

    animate();
}



document.addEventListener("DOMContentLoaded", function () {
    const t1 = document.getElementById("Web Development");
    const observer1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                canva('Html',90,1);
                canva('CSS',85,1);
                canva('JavaScript',80,1);
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.9 });
    observer1.observe(t1);

    const t2 = document.getElementById("Programming");
    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                canva('Python',85,2);
                canva('C/C++',95,2);   
                canva('JAVA',80,2);
                observer2.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.9 });
    observer2.observe(t2);

    const t3 = document.getElementById("Databases");
    const observer3 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                canva('MySQL',90,3);
                canva('OracleDB',80,3);
                observer3.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.9 });
    observer3.observe(t3);

});
