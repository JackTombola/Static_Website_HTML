function clickHandler() {

    if (!document.getElementById("checkbox").checked) {
        alert("Please remember to tick the checkbox. This application will not be submitted if the box isn't ticked. Make sure you submit an application for a person between 6-25. If older please vist the adult leader section on the website. If the box is left unticked please contact us either by the contact us page or via Email: Admin@Scouts.com or Phone: 0800 549 1457")
        return;
    }

    var text;
    var fav = confirm("Do you want to Submit Your Application?");
    if (fav) {
        alert("Your aplication form has been submitted and you will recieve an email in the next 30 days regarding your registration. Make sure you have submitted an application for a person between 6-25. If older please vist the adult leader section on the website. If you need to contact us before the 30 days please contact Admin@Scouts.com or phone us on 0800 549 1457. Thank you for Joining the Scout Association. ")
        location.reload();
    } else {
        alert("Your application was not submitted due to you clicking on cancel. Your detais have been saved incase you want to submit again. If you would like to create a new application please refresh the page. Make sure you submit an application for a person between 6-25. If older please vist the adult leader section on the website.")
    }

}

document.getElementById("submit-button").addEventListener("click", function () {
    clickHandler()
});