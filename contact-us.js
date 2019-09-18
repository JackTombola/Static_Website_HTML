function clickHandler() {

    var text;
    var fav = confirm("Are you sure you want to contact us?");
    if (fav) {
        alert("Your request has been sumbitted and you will an email in the next 30 days regurding your request. If your request is more urgent please contact Contact@Scouts.com or phone us on 0800 549 1457.")
        location.reload();
    } else {
        alert("Your request was not submitted due to you clicking on cancel. Your detais have been saved incase you want to submit again.")
    }

}

document.getElementById("submit-button").addEventListener("click", function () {
    clickHandler()
});