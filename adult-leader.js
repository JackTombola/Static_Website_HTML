function clickHandler() {

    if (!document.getElementById("checkbox").checked) {
        alert("Please remember to tick the checkbox. This application will not be submitted if the box isn't ticked. Make sure you have submitted an application for a person 14+ who would like to volunteer and 18+ for an adult leader. If the box is left unticked please contact us either by the contact us page or via Email: volunteering@Scouts.com or Phone: 0800 549 1457")
        return;
    }

    var text;

    var fav = confirm("Do you want to Submit Your Adult/Volunteering Application?");

    if (fav) {
        alert("Your aplication form has been submitted and you will recieve an email in the next 30 days regarding your registration. Make sure you have submitted an application for a person 14+ who would like to volunteer and 18+ for an adult leader. If younger than 25 and doesnt what to volunteer vist the sign up page. If you need to contact us before the 30 days please volunteering@Scouts.com or phone us on 0800 549 1457. Thank you for Joining the Scout Association. ")
        location.reload();

    } else {
        alert("Your application was not submitted due to you clicking on cancel. Your detais have been saved incase you want to submit again. If you would like to create a new application please refresh the page. Make sure you have submitted an application for a person 14+ who would like to volunteer and 18+ for an adult leader.")
    }
}

document.getElementById("submit-button").addEventListener("click", function () {
    clickHandler()
});