function clickHandler() {

    if (!document.getElementById("checkbox").checked) {
        alert("Please remember to tick the checkbox. This subscription sign up service will not be submitted if the box isn't ticked. If the box is left unticked please contact us either by the contact us page or via Email: Admin@Scouts.com or Phone: 0800 549 1457")
        return;
    }

    var text;
    var fav = confirm("Do you want to Subscribe to our Newsletter?");
    if (fav) {
        alert("Congratulations you have signed up to the scout assosiation newsletter. Thank you for joining. You will an email in the next 24 hours with a confimation link to verify yourself. If you dont recieve an email in the next 24 hours please contact Newsletter@Scouts.com or phone us on 0800 549 1457.")
        location.reload();
    } else {
        alert("Your subscription sign up was not submitted due to you clicking on cancel. Your detais have been saved incase you want to subscribe again.")
    }

}

document.getElementById("submit-button").addEventListener("click", function () {
    clickHandler()
});